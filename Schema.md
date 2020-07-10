### Accounts
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
email | string | not null, indexed, unique
passwordDigest | string | not null
passwordSalt | string | not null
sessionToken | string | not null, unique


### Profiles
- Must always have at least one profile, but you may have up to 7 profiles per account.

column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
name | string | not null
isKid | boolean | default false
accountId | integer | not null, foreign key references Accounts(id)
avatarId | integer | not null, foreign key references Avatars(id)


### Videos
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
title | string | not null, unique, indexed
description | string | not null
rating | integer (serial) | not null
year | integer | not null
isOriginal | boolean | default false
isMovie | boolean | not null
runtime | string | not null
director | string | nullable
starring | string | not null
seasons | string | nullable
genres | string | not null
details | string | not null
videoUrl | url | not null
titleImg | url | not null
backgroundImg | url | not null
buttonImg | url | not null
brandId | integer | not null, foreign key references Brands(id)


### Brands
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
brandName | string | not null
titleImg | url | not null
backgroundImg | url | not null
buttonImg | url | not null


### WatchListedVideos (join table)
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
profileId | integer | not null, foreign key references Profiles(id)
videoId | integer |  (allow null), foreign key references Videos(id)


### MovieSelections
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
selection | string | not null


### SeriesSelections
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
selection | string | not null


### Avatars
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
name | string | not null
avatarImg | url | not null


### ContinueWatchings (Bonus)
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
