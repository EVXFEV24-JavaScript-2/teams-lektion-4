import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { Styling } from "./Styling";

// Exercise 1
function ChangeDivColor() {
  const [color, setColor] = useState("blue");

  const switchColor = () => {
    setColor(color === "blue" ? "red" : "blue");
    /*if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }*/
  };

  return (
    <>
      <div className={color} onClick={switchColor}>
        Change color
      </div>
      <div style={{ backgroundColor: color }}>Change color</div>
    </>
  );
}

// Exercise 2
function InputMirror() {
  const [content, setContent] = useState("");

  return (
    <>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <span>{content}</span>
    </>
  );
}

// Exercise 3
function CheckboxMirror() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        onChange={(event) => setChecked(event.target.checked)}
      />
      <span>{checked ? "På" : "Av"}</span>
    </>
  );
}

// Exercise 4
function CheckboxMirrorLifecycles() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert("Hello World!");
  }, []);

  return (
    <>
      <input
        type="checkbox"
        onChange={(event) => setChecked(event.target.checked)}
      />
      <span>{checked ? "På" : "Av"}</span>
    </>
  );
}

// Exercise 5
function JsonPlaceholderExample() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => setPhotos(response.products));
  }, []);

  if (photos === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {photos.map((photo) => (
        <div>
          <img src={photo.thumbnail} />
        </div>
      ))}
    </>
  );
}

// Exercise 6
function ObjectProperties() {
  const [object, setObject] = useState({});
  const [propertyName, setPropertyName] = useState("");

  const addProperty = () => {
    setObject({ ...object, [propertyName]: "" });
    setPropertyName("");
  };

  return (
    <>
      <span>{JSON.stringify(object)}</span>
      <br />
      <input
        value={propertyName}
        onChange={(event) => setPropertyName(event.target.value)}
      />
      <button onClick={addProperty}>Add property</button>
    </>
  );
}

// Exercise 7 & 8 & 9
function NumberList() {
  const [list, setList] = useState([]);
  //const [counter, setCounter] = useState(1);

  const addNumber = () => {
    setList([...list, list.length + 1]);
    //setList([...list, counter]);
    //setCounter(counter + 1);
  };

  const doubleNumber = (index) => {
    setList(
      list.map((num, i) => {
        if (index !== i) return num;

        return num * 2;
      })
    );
  };

  const removeNumber = (index) => {
    setList(list.filter((num, i) => i !== index));
  };

  return (
    <>
      <ul>
        {list.map((num, index) => (
          <li>
            <span onClick={() => doubleNumber(index)}>{num}</span>
            <button onClick={() => removeNumber(index)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={addNumber}>Add number</button>
    </>
  );
}

// Exercise 10
function CounterExample() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
}

// Exercise 11
function RoutingExample() {
  // home, help, shop
  const [route, setRoute] = useState("home");

  let content = <div>404 not found</div>;
  if (route === "home") {
    content = <div>Home page</div>;
  } else if (route === "help") {
    content = <div>Help page</div>;
  } else if (route === "shop") {
    content = <div>Shop page</div>;
  }

  return (
    <>
      <nav>
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("help")}>Help</button>
        <button onClick={() => setRoute("shop")}>Shop</button>
      </nav>
      {content}
    </>
  );
}

// Exercise 13
function CustomSelect({ choices, onSelect }) {
  const [activeChoice, setActiveChoice] = useState(0);

  return (
    <>
      <ul>
        {choices.map((choice, index) => (
          <li
            style={activeChoice === index ? { color: "red" } : {}}
            onClick={() => {
              setActiveChoice(index);
              onSelect(index);
            }}
          >
            {choice}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <Styling />
      <div>Test</div>
    </>
  );

  return (
    <CustomSelect
      choices={["Sweden", "Norway", "Finland"]}
      onSelect={(choice) => console.log(choice)}
    />
  );

  return <RoutingExample />;

  return (
    <>
      <ChangeDivColor />
      <br />
      <InputMirror />
      <br />
      <CheckboxMirror />
      <br />
      <ObjectProperties />
      <br />
      <NumberList />
      <br />
      <CounterExample />
    </>
  );
}

export default App;
