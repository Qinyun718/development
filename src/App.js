import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import FilteredList from './FilteredList.js';


//Make a dataset for future use 
const productList = [
  {name: "Shield Mountain", gender: "Male", role: "Support", difficulty:8, survival:9, price: 58.8, img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1276839094,912610649&fm=26&gp=0.jpg"},
  {name: "Milady", gender: "Female",role: "Mage", difficulty:3, survival:2, price: 38.8, img: "http://p3.pstatp.com/large/pgc-image/152626763281200388785ad"},
  {name: "Crazy Iron", gender: "Male",role: "Fighter", difficulty:5, survival:6, price: 48.8, img: "https://imgo.youxiniao.com/img2018/4/17/17/2018041727762725.jpg"},
  {name: "Chess Star", gender: "Male",role: "Mage", difficulty:5, survival:6, price: 58.8, img: "http://image.uc.cn/s/wemedia/s/upload/2019/56074185413f0d2a4782784e92f902de.jpg"},
  {name: "Charlotte", gender: "Female",role: "Fighter", difficulty:7, survival:6, price: 68.8, img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3984913628,290795301&fm=11&gp=0.jpg"},
  {name: "Angela", gender: "Female",role: "Mage", difficulty:4, survival:4, price: 28.8, img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1516615429,3956391442&fm=26&gp=0.jpg"},
  {name: "Mark", gender: "Male",role: "Shooter", difficulty:7, survival:3, price: 68.8, img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2063010519,645990935&fm=26&gp=0.jpg"},
  {name: "Monkey King", gender: "Male",role: "Jungler", difficulty:5, survival:5, price: 68.8, img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2074883946,2970622213&fm=26&gp=0.jpg"},
  {name: "OX Monster", gender: "Male",role: "Support", difficulty:7, survival:9, price: 68.8, img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2930206328,2502592319&fm=26&gp=0.jpg"},
  {name: "Luna", gender: "Female",role: "Jungler", difficulty:9, survival:4, price: 58.8, img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3794276153,2811704599&fm=26&gp=0.jpg"},
  {name: "Yuanfang Li", gender: "Male",role: "Shooter", difficulty:7, survival:3, price: 38.8, img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1793767079,1502246328&fm=26&gp=0.jpg"},
  {name: "Arthur", gender: "Male",role: "Fighter", difficulty:2, survival:8, price: 8.8, img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2946535331,1141929795&fm=26&gp=0.jpg"},
  {name: "Blood Booster", gender: "Female",role: "Support", difficulty:2, survival:5, price: 18.8, img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1202595339,1632994068&fm=26&gp=0.jpg"},
  

]


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    
  }
  
  
  render(){
    return (
      
    <div>
      <h1>Glory of Legend - HEROS</h1>
		  <FilteredList list={productList} />
	  </div>

     
    )
  }
  }

export default App;
