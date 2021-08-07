import logo from './prolife-logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>PROLIFE OATH</h1>
      <p className='oath'>
        As a member of the human race, the Crown of God's creation, 

        I (say full name) solemnly pledge my life to the service of God and humanity;

        I will obey the Word ofGod and live in accordance with the Magisterial teachings of the Catholic Church;

        I will lead my life according to God's wonderful plan about love, sexuality, celibacy, marriage, family & human life;

        I will maintain the utmost respect for human life from the time of conception till natural death;

        I will not permit the evils of contraception, sterilisation, abortion, artificial reproductive technology & euthanasia;

        I make these promises solemnly, freely, and upon my honour.
      </p>
      <form className='main-form' onSubmit={(e)=>{
          e.preventDefault();
          alert('Submitted!')
        }}>
        <label>
          Name:
          <input required type="text" name="name" />
        </label>
        <label>
          Email:
          <input required type="text" name="email" />
        </label>
               <label>
          WhatsApp:
          <input type="text" name="name" />
        </label>
               <label>
          Mobile:
          <input type="text" name="name" />
        </label>

               <label>
          State:
          <input type="text" name="name" />
        </label>
                       <label>
          Country:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className='stats'>
        Total 200 persons have done the oath
      </div>
      </header>
    </div>
  );
}

export default App;
