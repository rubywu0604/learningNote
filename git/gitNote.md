## delete file
```
$ rm fileName > $ git add fileName
$ git rm fileName
```

## rename file
```
$ mv oldFileName newFileName > $ git add newFileName
$ git mv oldFileName newFileName
```

## amend commit record

##### amend the latest commit message

```
$ git commit --amend -m "newCommitMsg"
````

##### add file to the latest commit

   (reset the latest commit-not stage > add new file to stage > commit again)

   note: "--no-edit" = no need to update commit msg

```
$ git reset > $ git add newFileName
> $ git commit --amend --no-edit or $ git commit --amend -m "newCommitMsg"
```

##### amend the commit record after the one witch had been pushed (History data)

   note: "bb0c9c2" = start of SHA-1 / ^ = ~1 ... ^^^^^ = ~5

```
$ git rebase -i bb0c9c2
$ git rebase -i mian^ or $ git rebase -i head~5
```

## cancel commit
**WARNING : "--hard" will remove all staged records**
```
$ git reset ORIG_HEAD --hard or $ git reset HEAD~ --hard
or $ git co <harsh> --hard
```


## merge
(branch: _main_ & _feature_)

<img src="https://raw.githubusercontent.com/rubywu0604/learningNote/main/Image/merge%20vs%20rebase.png" width="500" >


##### _main_ pull back _feature_ (fast forward)

```
@ at branch main
$ git merge feature
```

##### _feature_ pull _main_

```
@ at branch feature
$ git merge main
```
##### conflict - solved by line in file

Any history data changed may encounter conflict when merge

if have conflict > use **$ git st** to check status >
open target file to mark solution of conflict > save file and merge again > push again

```
$ git merge --continue
```

##### conflict - solved by batch / by file

if have conflict > use **$ git st / $ git diff** to check status >
decide to use **ours or theirs** to solve the conflict (depends on your branch position)

```
by batch : $ git co . --ours / $ git co . --theirs
by file :  $ git co <filename> --ours / $ git co <filename> --theirs) 

> $ git add . > $ git merge --continue
```

## rebase
_feature_ insert into _main_

```
@branch feature
$ git rebase -i main or $ git rebase main
```

## reflog
```
$ git reflog
$ git cherry-pick <harsh>
```
