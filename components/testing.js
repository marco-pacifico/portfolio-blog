const password = "MySecurePassword123!";

// Regex pattern to match:
// - Minimum 8 characters
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - At least one special character (!@#$%^&*)
const pattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

if (pattern.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}

function NewItemForm({ handleAddItem }) {
  const [value, setValue] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        handleAddItem(value);
        setValue("");
      }}
    >
      {/* We'll touch on this ID stuff later too! */}
      <label htmlFor="new-item-input">Item:</label>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Add Item</button>
    </form>
  );
}

export default NewItemForm;

function App() {
  const [items, setItems] = React.useState([]);
  return (
    <div>
        {items.length > 0 && 
            <ShoppingList items={items} />
        }
    </div>
  );
}

class Shape {
  draw() {
    console.log("Uhhh maybe override me");
  }
}

class Circle {
  draw() {
    console.log("I'm a circle! :D");
  }
}
