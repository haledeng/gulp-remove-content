# gulp-remove-content
A gulp plugin to remove content in file.

### Install
```
npm i gulp-remove-content --save
```

### Usage
```
var remove = require('gulp-remove-content');
gulp.src('**.js')
	.pipe(remove({
		match: /console\.log\([^\)]+\)/
	}));
```
