import './App.css';
import RestaurantForm from './component/restaurantForm';
import RestaurantList from './component/restaurantList';
function App() {
  return (
    <div className="App">
      <RestaurantList />
      <RestaurantForm />
    </div>
  );
}

export default App;
