import {Link} from 'react-router-dom'

function Home() {

  return (
    <>
      <nav>
        <label>FOODIEE...</label>
        <a>Home</a>
        <a>Items</a>
      </nav>
      <div className="bgimg">
        <Link to="/thali">
          <button> Make your own Cuisine Platter </button>
        </Link>
        <img src="http://localhost:3000/imgs/b3.jpg" />
      </div>
    </>
  )
}

export default Home;