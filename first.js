
//******** creating Element in react *********
const h1 = React.createElement("h1",{id:"first", className:"heading1",style:{color:"white",backgroundColor:"black"}},'hello world');  
const h2 = React.createElement("h2",{id:"second", className:"heading2",style:{color:"white",backgroundColor:"black"}},'maaja aaya mujhe');  

const div = React.createElement("div",{},[h1,h2]); // multiple element kko div ke andrr daalna hai tho  array ki form me daaldo

// ********* rendering element in react *********
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));  

// Reactroot.render(h1); // render krte time previous sare element ko hatta dega
// Reactroot.render(h2); // prr hmme tho dono element ko root me render krvana hai //ek div me daalo h1 & h2 ko
Reactroot.render(div);

// ********* JSX ********
{/* <div>
    <h1>
        <div>
            <h2></h2>
        </div>
    </h1>
</div> */}
// but it is complex to render complex element in React // JS hi sari tha :: ruko thoda....

// hmm JS ke anndrr bhi html jaisa code likh skte hain :: by JSX //not part of react 
// jS ke andrr jo html ka code hai ussko react ke andrr convert krr dega JSX


// *********** Bundler ******** //not part of react 
// hmm first.js, index.html ko sever pe daal tho skte hai :: but abhi ye production ready code nhi hai
// due to various comments and spaces , it is not optimized code
// ek kaam kro react ka sara code, html file ke andrr daal do // but this will inc. size of our file
// jitna jaruri hai utna hi code daalu html me
// tho mei code ko production ready kaise kru (optimized code, comments and spaces ko hata do,kuch code aisa hoga jo mei use nhi krr raha , react and reactDOM me kuch portion use hi na hua ho)
// therefore hmme file ka size reduce krna hai :: for this we use BUNDLER
// Bundler : pure code(JS,CSS,HTML,etc) ko phadhta hai, orr ek Bundler tayarr krta hai :: which is ready for production 
// Webpack, vite , parcel, rollup etc.
// hmm parcel use krenge



