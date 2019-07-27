### 学习react ###

#### react大体包含的概念
 1. 组件（外部props，内部state）
 2. JSX
 3. Virtual DOM 
 4. Data Flow(单向数据流)

 > JSX 预处理器,引用babel-preset-react-app等
 > jsx的本质就是动态创建组件的语法糖，而不是模版语言，内部使用了创建dom的方式createElement（）
 
 ```
 jsx本身也是表达式：
  const element = <h1>hello ,world</h1>
  const element = <h1>{props.name}</h1>
在属性中使用表达式：
<MyComponent foo={1+2+3} />
延展属性：(es6)
const props = {name:s,age:0}
const greet = <Test {...props}>

jsx的约定（为了区分原生dom节点和react组件）
jsx标记可以直接使用属性语法：<menu.item />

```

#### 生命周期：
> componentDidMount:ui渲染完成后调用，只执行一次，典型场景：获取外部资源
componentWillUnmount:组件移除的时候被调用,典型场景：资源是放
getDerivedStateFromProps:每次render都回调用，当state需要从props初始化的时候使用,典型场景：表单控件获取默认值
constructor:唯一可以直接修改state的地方
componentDidUpdate:更新后
getSnapshotBeforeUpdate:在页面render之前调用，state已经更新，场景：获取render之前的dom状态
shouldComponentUpdate:决定虚拟dom是否要重绘，场景：性能优化
一般可以由PureComponent自动实现

#### 理解虚拟dom:(理解key属性的作用)
>对比节点树是应用了广搜分比较
节点跨层的时候，粗暴的删除，然后添加，不考虑之后还是否变化，针对UI不会频繁跨层（多数情况下是属性变化了），用虚拟dom的优势还是大于劣势，

```
它存在的两个假设：

1）组件的dom结构是相对稳定的
2）类型相同的兄弟节点可以被唯一标识->key
3)o(n)
```

#### 组件复用的方式
> 函数作为子组件（这是一种设计模式）,render的内容可以自定义（使用者来使用）

```
class MyComponent extends React.Component{
    render(){
        return (
            <div>
                {this.props.children('luffy')}
            </div>
        )
    }
}
<MyComponent>
    {(name)=>(<div>{name}</div>)}
</MyComponent>
```
> 高阶组件（这是一种设计模式，没有UI）

#### react 16.3新特性：Context API
```
const ThemeContent = React.createContext('light')//创建上下文,主要应用是解决组件之间传值的问题
class App extends React.Component{
    render(){
        return (
            <ThemeContent.Provider value="dark">
                <ThemedButton />
            </ThemeContent>
        )
    }
}
function ThemedButton(props){
    return (
        <ThemeContent.Consumer>
            {theme =><Button {...props} theme={theme}>}
        </ThemeContent>
    )
}
```




> 3种脚手架
create-react-app   
rekit（基于create-react-app ，提供了更多的功能，redux,react-router）
codesandbox(webpack是跑在浏览器端的，一般情况下，都是
跑在node端)


> 打包部署
为什么要打包：
编译es6,编译jsx，优化代码体积，整合资源（图片，less/sass）
注意事项：
1.设置node环境为production
2.禁用开发环境的语法 logger debugger


> store
理解reducer
state+action =>new state
combineReducers 接受多个reducer
bindActionCreators


