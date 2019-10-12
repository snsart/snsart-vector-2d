# snsart-vector-2d
一个2d向量类，包含各种2d向量运算方法

### 安装
```
npm install snsart-vector-2d --save
```

### 使用

1. 先导入Vector2D包
```
import {Vector2D} from 'snsart-vector-2d'
```
2. 使用举例
```
let v=new Vector2D(10,15);//创建向量
v.add(new Vector2D(5,5));//向量加法
console.log(v.x,v.y);//15,20
```
