# Learn javascript with typescript

### Install Typescript

```
npm i -g typescript
```
### Check Typescript version
```
tsc -v
```
### Compile Typescript

Here index is the name of typescript file index.ts

```
tsc index
```

### Specifying output folder

--outfile --> It is used to specify output file and folder \n
-w --> It is used to compile changes automatically when we make any changes

```
tsc index.ts  --outfile  public/index.js  -w

```
### To create ts config file

```
tsc --init
```
