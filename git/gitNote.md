##### delete file
```
$ rm fileName > $ git add fileName
$ git rm fileName
```

##### rename file
```
$ mv oldFileName newFileName > $ git add newFileName
$ git mv oldFileName newFileName
```

##### amend commit record

1. amend the latest commit message
```
$ git commit --amend -m "newCommitMsg"
````
2. add file to the latest commit

   (reset the latest commit > add new file to stage > commit again)

   note: "--no-edit" = no need to update commit msg
   ```
$ git reset > $ git add newFileName
> $ git commit --amend --no-edit or $ git commit --amend -m "newCommitMsg"
```

3. amend the commit record after the one witch had been pushed (History data)

  note: "bb0c9c2" = start of SHA-1 / ^ = ~1 ... ^^^^^ = ~5
```
$ git rebase -i bb0c9c2
$ git rebase -i mian^ or $ git rebase -i head~5
```

##### cancel rebase request
```
$ git reset ORIG_HEAD --hard
```

## merge
(branch: _main_ & _feature_)

<img src="Image/merge vs rebase.png" width="500" >

##### merge
_main_ pull back _feature_ (fast forward)
```
@branch main
$ git merge feature
```

##### rebase
feature insert into _main_
```
@branch feature
$ git rebase -i main or $ git rebase main
```
