#vue-ios7-switch
> Mint-ui(Vue2.x) widget vue-ios7-switch based on sass &amp; webpack.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
+ http://abpetkov.github.io/switchery/
+ http://wd.dizaina.net/en/experiments/ios7-style-switch/

## usage:
```
<div>
  <vue-ios7-switch :checked="false"/>
  <vue-ios7-switch size="20px" theme="blue" :checked="true" />
  <vue-ios7-switch size="30px" :checked="false" />
  <vue-ios7-switch size="100px" theme="green" :checked="true" />
  <vue-ios7-switch size="120px" theme="blue" :checked="true" :disabled=true />
</div>
```

## options:
- [x] size (20px/30px/...)
- [x] theme ('blue'|'green')
- [x] checked (true|false)
- [x] disabled (true|false)
