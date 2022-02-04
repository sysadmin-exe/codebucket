# About

This contains resources to run operations on MongoDB
- Mongodump: this will help you dump(export) a database that you want to use in another mongodb instance as a zip file
- Mongorestore: this will help restore a database into a mongodb instance from a file exported or dumped like above
- Renaming values in Documents:
    - change-string.js: this can be used to change all instances of a specified string in all database specified collection documents
    - change-value.js: this can be used to change all values of a specified key from current value to a new value

## Mongodump
```bash
mongodump -d=database-name-to-dump/export --uri="mongodb://username:passwd@clusterhostname:27017" --out=output-file.gzip
```

## Mongorestore
```bash
mongorestore -d=restore-into-databasename --uri="mongodb://username:passwd@clusterhostname:27017" output-file
````