### Step 1: Launch an EC2 Instance

Log in to your AWS account.
Navigate to the EC2 dashboard.
Click on the "Launch Instance" button.
Choose an Amazon Machine Image (AMI) that suits your needs. You can select a Linux-based image like Amazon Linux or Ubuntu.
Select the instance type (e.g., t2.micro).
Configure the instance details, such as the number of instances and network settings.
Add storage as per your requirements.
Add tags if needed.
Configure security groups to allow incoming traffic on ports 80 (HTTP) and 22 (SSH) at least.

### Step 2: Connect to the EC2 Instance

Use SSH to connect to your EC2 instance using the key pair you specified during the instance launch.
`ssh -i myWebServer.pem ec2-user@ec2-34-198-181-251.compute-1.amazonaws.com`

### Step 3: Install Dependencies

Update the package manager and install required dependencies:
`sudo yum update -y`
`sudo yum install -y python3 python3-pip mysql-devel`
`sudo yum install python3-devel`

### Step 4: Set Up MySQL Database

Install MySQL server: `sudo yum install -y mysql-server`, `pip install mysqlclient`
Start MySQL service and enable it to start on boot: `sudo systemctl start mysqld` > `sudo systemctl enable mysqld`
Secure MySQL installation: `sudo mysql_secure_installation`
Create a database and a user for your Django application:

`mysql -u root -p`
> CREATE DATABASE stylish;
> CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'your_password';
> GRANT ALL PRIVILEGES ON stylish.* TO 'root'@'127.0.0.1';
> FLUSH PRIVILEGES;
> EXIT;

### Step 5: Set Up Django Project

Install virtualenv and create a virtual environment for your Django project:

`sudo pip3 install virtualenv`
`mkdir ~/my-project`
`cd ~/my-project`
`virtualenv venv310`
`source venv310/bin/activate`

Install Django within the virtual environment:
`pip install django`

Start a new Django project:
`django-admin startproject stylish`

### Step 6: Configure Django Settings

`nano /home/ec2-user/my-project/stylish/stylish/settings.py`
ALLOWED_HOSTS = ['34.198.181.251', '0.0.0.0']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

### Step 7: Test Django Development Server
Run Django development server to test if everything is working fine:
`cd ~/my-project/stylish`
`python manage.py runserver 0.0.0.0:5000`

Open your browser and navigate to http://your-ec2-public-ip:8000 to see if your Django application is accessible.

### Step 8: Install and Configure Gunicorn

Install Gunicorn within the virtual environment: `pip install gunicorn`
Test Gunicorn to make sure it can serve your Django application: 
`mysql_conn`

In another terminal session, check if your app is accessible through Gunicorn.

### Step 9: Install and Configure NGINX
`sudo yum install -y nginx` / `sudo amazon-linux-extras install nginx1`
Create a new NGINX configuration file for your Django app:
`sudo nano /etc/nginx/conf.d/stylish.conf`

upstream stylish {
    server 127.0.0.1:5000;  #  IP and port where Gunicorn is running
}

server {
    listen 80;
    listen [::]:80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
 
Enable the Nginx server block and restart Nginx:
`sudo ln -s /etc/nginx/sites-available/stylish /etc/nginx/sites-enabled/`

check file: `sudo nginx -t`
`systemctl status nginx.service`
`sudo systemctl start nginx`
`sudo systemctl enable nginx`
`sudo systemctl restart nginx`

`sudo ln -s /etc/nginx/sites-available/ /etc/nginx/sites-enabled/`

you can use its commands to manage the firewall rules. For example, you can add a rule to allow HTTP traffic (port 80) like this:
To enable http`sudo firewall-cmd --zone=public --add-service=http --permanent`
To enable http&https`sudo firewall-cmd --zone=public --add-service=http --add-service=https --permanent`
`sudo firewall-cmd --reload`

remove
`sudo firewall-cmd --zone=public --remove-port=5000/tcp --permanent`
`sudo firewall-cmd --reload`

check
`sudo firewall-cmd --list-all`

### Step 10: Run Gunicorn as a Systemd Service
Create a Gunicorn systemd service file:
`sudo nano /etc/systemd/system/stylish.service`

<!-- [Unit]
Description=gunicorn instance to serve stylish Flask app
After=network.target

[Service]
User=ec2-user
Group=ec2-user
WorkingDirectory=/home/ec2-user/project-stylish/stylish
ExecStart=/home/ec2-user/envpy310/bin/gunicorn --workers 3 --bind unix:stylish.sock wsgi:app

[Install]
WantedBy=multi-user.target -->

[Unit]
Description=gunicorn instance to serve stylish Flask app
After=network.target

[Service]
User=ec2-user
Group=ec2-user
WorkingDirectory=/home/ec2-user/project/stylish
ExecStart=/home/ec2-user/miniconda3/envs/envpy310/bin/gunicorn --workers 3 -b 127.0.0.1:5000 app:app
Restart=always

[Install]
WantedBy=multi-user.target

### Step 11: Enable and Start Gunicorn Service
check status: `sudo systemctl status stylish`
`sudo systemctl start stylish`
`sudo systemctl enable stylish`

** `sudo systemctl daemon-reload`
** `sudo systemctl restart stylish`


1. When you add new static files or modify existing ones.
2. During the deployment process to ensure all static files are available for production serving.

`python manage.py collectstatic`
Running collectstatic:
Before you can see the home page with static files served, you need to run the collectstatic management command. This command copies the static files from your apps' static directories to the STATIC_ROOT directory.
Restart the Django development server:`python manage.py runserver`

Run the following command from your Django project's root directory:

`sudo netstat -tulnp | grep 5000`


    user nginx;
    worker_processes auto;
    error_log /var/log/nginx/error.log;

    events {
       worker_connections 1024;
    }

    http {
    
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    access_log /var/log/nginx/access.log;

    sendfile on;
    keepalive_timeout 65;

    server {
    listen 80;
    listen [::]:80;
    server_name _;

    location / {
        proxy_pass http://unix:/home/ec2-user/project-stylish/stylish.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        root /home/ec2-user/project-stylish/templates/index.html;
        }
    }
    }


<!-- MYSQL -->
sudo service mysqld status
sudo service mysqld start
sudo service mysqld restart

============================================================

```sudo ufw status
sudo certbot renew --dry-run

PM2_PROXY=http://localhost:8080 pm2 start ecosystem.config.js

server {
	listen 443 ssl;
	server_name get-good-job.com;
	ssl_certificate /etc/letsencrypt/live/www.get-good-job.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.get-good-job.com/privkey.pem;

	location / {
		proxy_pass http://localhost:8080;
		proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
	}
}
```
=============================================================

upstream my_nodejs_upstream {
    server localhost:8080;
    keepalive 64;
}

server {
	listen 443 ssl;
	server_name get-good-job.com;
	ssl_certificate /etc/letsencrypt/live/www.get-good-job.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/www.get-good-job.com/privkey.pem;

	location / {
		proxy_pass http://my_nodejs_upstream/;
		proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_redirect off;
                proxy_read_timeout 240s;
	}
}



cd /home/scrapeops/Engineer-Job-Market-Analysis

#install a python virtual environment
python3 -m venv python_env

#activate the python virtual environment
source python_env/bin/activate
#conda env create -f environment_droplet.yml

#install any python modules specified in the requirements.txt file
pip3 install -r requirements.txt
#conda activate goodjob

#install scrapy 
pip3 install wheel scrapy

pip3 install scrapeops-scrapy
pip3 install botocore
pip install botocore