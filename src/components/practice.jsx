import React, { useState } from 'react';
const TextImage = '/test.png';

function MyFirstButton() {
  return (
    <button>First Button</button>
  );
}

const user = {
  name: 'Vijayta',
  lastName: 'Panchal',
  imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFj6YFYdDHGcQ/profile-displayphoto-shrink_800_800/B56Z701T1nGUAg-/0/1782224077313?e=1796860800&v=beta&t=jBxJMb9IgQx0epMIgzmTDOKLv9mLPuUaPekL6e5WUXI',
  imageSize: 90,
};

function Authentication({ isAuthenticated }) {
  let authentication;

  if (isAuthenticated) {
    authentication = <h1>Welcome back {user.name}!</h1>;
  } else {
    authentication = <h1>Please sign up.</h1>;
  }

  return authentication;
}

const products = [
  { title: 'Shirt', id: 1, color: 'red', price: 100 ,imageUrl: TextImage},
  { title: 'Pant', id: 2, color: 'blue', price: 110 ,imageUrl: TextImage},
  { title: 'Shoes', id: 3, color: 'green', price: 120 ,imageUrl: TextImage},
  { title: 'Hat', id: 4, color: 'brown', price: 130 ,imageUrl: TextImage},
  { title: 'Gloves', id: 5, color: 'purple', price: 140 ,imageUrl: TextImage},
  { title: 'Scarf', id: 6, color: 'orange', price: 150 ,imageUrl: TextImage},
  { title: 'Socks', id: 7, color: 'brown', price: 160 ,imageUrl: TextImage},
  { title: 'Tie', id: 8, color: 'gray', price: 170 ,imageUrl: TextImage},
];



const Practice = () => {
  const [authInput, setAuthInput] = useState('true');
  const isAuthenticated = authInput === 'true';

    return (
        <div>
          <h1>Practice</h1>

          <div className="code-peactice-container">
            
            <div className="code-container">
  {` {function MyFirstButton() {
    return (
      <button>First Button</button>
      
      
      // we can call this function in the return statement as much time we want
      <MyFirstButton />
    );
  }}`}
           </div>

          <MyFirstButton />
        </div>   
          
        <div className="code-peactice-container">
          <div className="code-container">
{`{const user = {
  name: 'Vijayta',
  lastName: 'Panchal',
  imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFj6YFYdDHGcQ/profile-displayphoto-shrink_800_800/B56Z701T1nGUAg-/0/1782224077313?e=1796860800&v=beta&t=jBxJMb9IgQx0epMIgzmTDOKLv9mLPuUaPekL6e5WUXI',
  imageSize: 90,
};`}
          </div>

          <h2>Profile of {user.name} {user.lastName}</h2>
          <img className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            width={user.imageSize}
            height={user.imageSize}
            style={{
              borderRadius: '50%',
            }}
          />
        </div>

        <div className="code-peactice-container">
          <div className="code-container">
            {`const [authInput, setAuthInput] = useState('true');
const isAuthenticated = authInput === 'true';

<input
  value={authInput}
  onChange={(event) => setAuthInput(event.target.value)}
/>

if (isAuthenticated) {
  authentication = <h1>Welcome back {user.name}!</h1>;
} else {
  authentication = <h1>Please sign up.</h1>;
}`}
          </div>

          <label>
            isAuthenticated{' '}
            <input
              value={authInput}
              onChange={(event) => setAuthInput(event.target.value)}
            />
            <br />
            <small><b>*Enter 'true' to sign in and 'false' to sign out/</b></small>
            
          </label>
          <Authentication isAuthenticated={isAuthenticated} />
        </div>

        <div className="code-peactice-container">
          <div className="code-container">
            {`const products = [
  { title: 'Shirt', id: 1, color: 'red', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10',
  { title: 'Pant', id: 2, color: 'blue', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Shoes', id: 3, color: 'green', price: 120, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Hat', id: 4, color: 'brown', price: 130, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Gloves', id: 5, color: 'purple', price: 140, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Scarf', id: 6, color: 'orange', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Socks', id: 7, color: 'brown', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
  { title: 'Tie', id: 8, color: 'gray', price: 170, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKSFKD0WAF0YlXJFrogsHiAsqvrAzd9RUloFiqxwJig&s=10' },
];`}
          </div>

          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id}>
                <p><strong>Product Name: </strong>{product.title}</p>
                <p><img src={product.imageUrl} alt={product.title} width={100} height={100} /></p>
                <p><strong>Product Color: </strong><span style={{ color: product.color }}>{product.color}</span></p>
                <p><strong>Product Price: </strong>${product.price}</p>
              </li>
            ))}
          </ul>    
        </div>
      </div> 
    );
};
export default Practice;