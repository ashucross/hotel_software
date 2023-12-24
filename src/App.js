import React from 'react'; 
import './App.css';


 
function App() {
  const data = [
    { id:'1',type: 'D', room: '1', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'lightblue'},  
    { id:'1',type: 'D', room: '2', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'lightblue'},  
    { id:'1',type: 'EQA', room: '3', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'lightblue'},  
    { id:'1',type: 'SPA', room: '4', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'pink'},  
    { id:'1',type: 'SPA', room: '5', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'pink'},  
    { id:'1',type: 'F', room: '6', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'green',border:'2px solid black'},  
    { id:'1',type: 'F', room: '7', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'green'},  
    { id:'1',type: 'D', room: '8', date: '120',date1 :'130',date2 :'160',date3 :'130' ,date4:'160',date5:'120',date6:'120',date7:'120',color:'lightblue'},  
   ];
  return (
    <div className="app">
      <header className="app-header">
        <div style={{'margin-left':'40px'}}>
        <p >RR Room Allocation : Monday 26/12/2023 - Room 6</p>
        </div>
      </header>
      <main className="app-main">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr >
                <th style={{'background':'rgb(60 115 199)','color':'white','border':'1px solid black'}}> {'<<'} Prev</th>
                <th colSpan={7}></th> 
                <th style={{'background':'rgb(60 115 199)','color':'white','border':'1px solid black'}}> Next {'>>'}</th> 
              </tr> 
              <tr >
                <th style={{'background':'#c9c9c9'}}>Sort By</th>
                <th style={{'background':'#c9c9c9'}}>Sort By</th>
                <th style={{'background':'white'}}> </th> 
                <th style={{'background':'white'}}> </th> 
                <th style={{'background':'white'}}> </th> 
                <th style={{'background':'white'}}>Christmas Day</th> 
                <th style={{'background':'white'}}>Booking Day</th> 
                <th style={{'background':'white'}}> </th> 
                <th style={{'background':'white'}}> </th>  
              </tr>
              <tr> 
                <th style={{'background':'#c9c9c9'}}>Type</th>
                <th style={{'background':'green'}}>Room</th>
                <th style={{'background':'green'}}>Thursday 22 Dec</th> 
                <th style={{'background':'#c9c9c9'}}>Friday 23 Dec</th> 
                <th style={{'background':'#c9c9c9'}}>Saturday 24 Dec</th> 
                <th style={{'background':'red'}}>Sunday 25 Dec</th> 
                <th style={{'background':'red'}}>Monday 26 Dec</th> 
                <th style={{'background':'#c9c9c9'}}>Tuesday 27 Dec</th> 
                <th style={{'background':'#c9c9c9'}}>Wedenesday 28 Dec</th>  
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}> 
                  <td style={{'background':row.color}}>{row.type}</td>
                  <td>{row.room}</td> 
                  <td style={{'text-align':'center'}}>{row.date}</td> 
                  <td style={{'text-align':'center'}}>{row.date2}</td> 
                  <td style={{'text-align':'center'}} >{row.date3}</td> 
                  <td style={{'text-align':'center',color:'grey'}}>{row.date4}</td> 
                  <td style={{'text-align':'center','border':row?.border}}>{row.date5}</td> 
                  <td style={{'text-align':'center'}}>{row.date7}</td> 
                  <td style={{'text-align':'center'}}>{row.date7}</td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
