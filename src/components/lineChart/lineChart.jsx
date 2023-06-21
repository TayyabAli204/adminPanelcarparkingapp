import React, { Component } from "react";
import Chart from "react-apexcharts";
import img from '../../assets/lineChart/Vector.svg'
import './LineChart.css'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
              {
                name: "Job Applied",
                data: [30, 40, 45, 50, 49, 60, 70, 91,22,44,20,80]
              },
              {
                name: "Job View",
                data: [10, 20, 5, 30, 29, 10, 20, 2,65,25,45,9]
              }
            ],
          
      options: {
        colors : ['#5932EA', '#F2EFFF'],
          chart: {
          type: 'bar',
          height: '350px',
          stacked: true,
          animations: {
            enabled: false
       },
          toolbar:{
            show:false
          }
        },
     

 
        xaxis: {
                  
          categories: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun', 'July','Aug','Sep','Oct','Nov','Dec'],
          style: {
            fontFamily: 'Product Sans',
            color: ['#BCBCBC'],
            fontSize: '13px',
            cssClass: 'xaxis',
        },
        fill: {
          opacity: 1,
        
        },

                },
              
        fill: {
          opacity: 1,
          color: ['#BCBCBC'],
        
        },

         dataLabels: {
    enabled: false
  },
  legend:{
    show: false

  },

        plotOptions: {
          bar: {
           borderRadius: 8,
        
          }
         },

 
      }
    }
  }

  render() {
    return (
          <div className=" border-2 border-[#ECEEF7] rounded-md  bg-[#FFFFFF] mt-6 ">
            <div className="flex font-bold justify-between p-[33px] ">

          <p className="text-[22px] ">Job Statistics</p>
          <div className="flex justify-center items-center gap-9">
<div className="flex gap-10">

          <div className="hidden lg:flex  gap-[5px] justify-center items-center">
            <div className="w-4 h-4 bg-[#F2EFFF] rounded-sm"></div>
            <p>
            Job View
            </p>
          </div>
          <div className="hidden lg:flex gap-[5px] justify-center items-center">
            <div className="w-4 h-4 bg-[#5932EA]  rounded-sm"></div>
            <p>
            Job Applied 
            </p>
</div>
          </div>
            <div className="hidden  text-[#1A2B88] sm:flex justify-between p-[10px] rounded-xl cursor-pointer items-center w-[119px] text-[14px] bg-[#F7F7F7] ">This Month <img src={img} alt="" /></div>
          </div>
            </div>
            <div className="">

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height='320px'
              />
              </div>
        </div>
    );
  }
}

export default App;