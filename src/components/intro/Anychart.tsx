import React, { useEffect } from 'react';
import anychart from 'anychart';

const GraphChart: React.FC = () => {
  useEffect(() => {
    // create data
  
    const data = {
      nodes: [
        { id: "Groot",
        height:75,
        fill:{
          src:"https://img.danawa.com/prod_img/500000/330/488/img/6488330_1.jpg?_v=20190425093122",
        } 
    },
        { id: "Deadpool",
        height:75,
        fill:{
          src:"https://cdn.eyesmag.com/content/uploads/posts/2021/01/12/deadpool-3-is-coming-main-08cb7872-c797-45a4-8db2-a9b7306e7d86.jpg",
        }
    }, 
        { id: "Hulk",
        height:75,
        fill:{
          src:"https://img.seoul.co.kr//img/upload/2021/12/15/SSI_20211215204539.jpg",
        }
    },
     
        { id: "Tony",
          height:75,
          fill:{
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/250px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
          } },
        {
          id: "Ironman",
          height: 120,
          fill: {
            src: "https://w7.pngwing.com/pngs/618/481/png-transparent-iron-man-spider-man-ultron-iron-man-iron-man-spider-man-ultron.png"
          }
        },
        { id: "Spiderman",
        height:75,
        fill:{
          src:"https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp",
        } 
    },
        { id: "Thor",
        height:75,
        fill:{
          src:"https://i.namu.wiki/i/Xc7WmR-EasRjk8ruE4tKKhJtO7Q77dMbakKNYso7OODCyaZ5EhvDemp-2EQmNsAJEht6E6ATDtdOE6dIMp1zAw.webp",
        }
     },
        { id: "Black",
        height:75,
        fill:{
          src:"https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/movies/45/5ebd020b13214776.jpg",
        }
     }
      ],
      edges: [
        { from: "Groot", to: "Ironman" },
        { from: "Groot", to: "Ironman" },
        { from: "Deadpool", to: "Ironman" },
        { from: "Hulk", to: "Ironman" },
        { from: "Tony", to: "Ironman" },
        { from: "Spiderman", to: "Ironman" },
        { from: "Black", to: "Ironman" },
        { from: "Thor", to: "Ironman" }
      ]
    };

    // create a chart and set the data
    const chart = anychart.graph(data);

    // prevent zooming the chart with the mouse wheel
    chart.interactivity().zoomOnMouseWheel(false);

    // set the chart title
    chart.title("Move it ⬇");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();

    // Clean up anychart resources on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="container" style={{marginTop:'-190px',marginLeft:'30%',width: '750px', height: '400px' }} />;
  
};

export default GraphChart;
