import gulp from 'gulp';
import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

gulp.task('rollup', () => rollup({
    entry: 'app/components/app.js',
    plugins: [
      nodeResolve({ jsnext: true }),
      commonjs()
	  ]
  }).then(bundle => bundle.write({
    format: 'iife',
    dest: 'build/js/app.rollup.js'
  })
));