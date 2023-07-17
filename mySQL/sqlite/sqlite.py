from peewee import *

db = SqliteDatabase('students.db')

class Student(Model):
    name = CharField(max_length=255, unique=True)
    points = IntegerField(default=0)

    class Meta:
        database = db # This model uses the "students.db" database.

students = [
    {'name': 'aaa','points': 100},
    {'name': 'bbb','points': 80},
    {'name': 'ccc','points': 60},
    {'name': 'ddd','points': 40},
    {'name': 'eee','points': 10},
]

def add_students():
    try:
        for student in students:
            Student.create(name=student['name'], points=student['points'])
    except IntegrityError:
        student_record = Student.get(name = student['name'])
        student_record.points = student['points']
        student_record.save()

def top_student():
    student = Student.select().order_by(Student.points.desc()).get()
    return student

if __name__ == '__main__':
    db.connect()
    db.create_tables([Student], safe=True)
    add_students()
    print("Top student: {0.name}, points: {0.points}.".format(top_student()))