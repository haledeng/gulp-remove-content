# gulp-remove-content
A gulp plugin to remove certain content in file.

### Install
```
npm i gulp-remove-content --save
```

### Usage
```
// remove all console.log expression in file content.
var remove = require('gulp-remove-content');
gulp.src('**.js')
	.pipe(remove({
		match: /console\.log\([^\)]+\)/
	}));
```


### Config Option
**match**: A RegExp object or string to remove.
