Rahul-100x This will be good at medium pace. Not fast, not slow.
Rahul-100x Try to maintain the pace.
Rahul-100x Theek hai? Toh main mota-mota pehle bata deta hoon. What is going to be the sort of a syllabus for React?
Rahul-100x Theek hai? Cool. The first part is the intro to React.
Rahul-100x Here, basically, we would be using state, use, state, and useEffect. Then, second thing is the navigation: how to exactly do navigations in React.
Rahul-100x For example, if I visit a different page, I need to load the different HTML for that particular page. Third things are more about hooks.
Rahul-100x Hooks is also one of the concepts of React. Then comes the state management.
Rahul-100x And in the state management, if those who already know React would be going through 10 stack, we can also do the React query. But for the simplicity, I have just put the 10 stack here.
Rahul-100x And the last bit is S3. Covering all of these 6 topics in 4 or 5 hours is going to be slightly hard for those who are completely beginners, specifically.
Rahul-100x Toh mota-mota goal aisa rahega, that first we need to do React and the navigation. These are some practice questions.
Rahul-100x Feel free to do it at home. Toh navigation and React ke baare mein thodi cheezein we are going to cover in first 2 hours.
Rahul-100x Next 2 hours would be more focused on state and hooks. If we are able to cover S3, it's super good.
Rahul-100x We would be doing all sort of design there. But agar S3 kar paate hain toh bahut achha hai.
Rahul-100x Agar nahi kar paate, then tomorrow we will have a class on S3. That's the high-level goal for next 2 days.
Rahul-100x Alright?
Rahul-100x With that in mind, let's start with the React. Okay, how many of you know what is React?
Rahul-100x Okay, anyone? What is React?
Rahul-100x Batao. It's a framework which is built on top of JavaScript.
Rahul-100x Which is built on top of JavaScript. Only JavaScript.
Rahul-100x Okay. Now the second bit.
Rahul-100x How many of you know why we use React instead of a normal HTML, CSS, which we are doing traditionally? Like, why we prefer React?
Rahul-100x Re-rendering of.
Rahul-100x It prevents multiple re-renders. Okay.
Rahul-100x jaise?
Rahul-100x Okay.
Rahul-100x Navigation ke liye single page application.
Rahul-100x Main bit is that single page application. If somebody asks you why we prefer React, the first point should be SPA. That is, single page application.
Rahul-100x thik hai? So let's start with the React pehle. So, uh, the first question is: why do we need React?
Rahul-100x Previously, what we used to do is, we used to use Node.js and the basic DOM, which we have HTML, to create a basic application. mota-mota aisa kuch code dikhta hai.
Rahul-100x Let's say I have one H2 which contains ID, some text inside the H2. Then I have a button which says some ID, some text inside that button.
Rahul-100x Then I have a script. Right?
Rahul-100x And I hope everybody knows that, let's say, if I have a body tag here.
Rahul-100x This is my body tag. My head tag would always be above it.
Rahul-100x Now, where is the script? Here comes in the picture.
Rahul-100x Should I include script here itself, at this line? Or would script be at here, or script?
Rahul-100x Where we exactly write the script code? jahan pe hum JavaScript ka code likhte hain.
Rahul-100x In our vanilla HTML, CSS, JavaScript. At the bottom.
Rahul-100x Why we do it at the bottom?
Rahul-100x Yes, why? Because we always code always gets renders from top to down.
Rahul-100x Hence, we want all the elements to get the render first, and then the JavaScript will come into the picture. cool hai.
Rahul-100x So this is what pretty similar is what done here. Let's assume there is a body tag at the top and bottom.
Rahul-100x Then I have some tags here. Then the script.
Rahul-100x Now, if you see the script, what script is doing? I am just declaring a variable.
Rahul-100x uske baad, I am just fetching these two elements. Using command.getElementById, the ID name.
Rahul-100x Then what I am doing, I am just attaching one of the event listener to this particular button. What is event listener?
Rahul-100x Event listener is basically a property. aur wo dalte kaise hain?
Rahul-100x I can also add it here itself by using a onClick keyword. But main just JavaScript ko niche likh raha hoon.
Rahul-100x Add event listener, which is a click event listener. It will just increment the counter.
Rahul-100x This is the vanilla JavaScript HTML code jo abhi tak hum likhte aaye hain. Right?
Rahul-100x Now the question comes is: why people invented React? It's because of something called state management.
Rahul-100x ab wo state management kya hoti hai? Let's say I have this LinkedIn.
Rahul-100x Now, uh, as you can see, you can see the top 5 here. ki mere paas 5 notification already aa rakhi hain.
Rahul-100x This is the problem that Facebook faced. ki jab bhi koi notification pe click karta hai, as soon as he clicks, he sees the 5 notifications.
Rahul-100x Even though he already sees all the notifications. yahan pe jo ek 5 likha rehta hai, that 5 does not disappear from the browser state.
Rahul-100x uske liye user ko phir reload karna padta tha pura ka pura page to make it disappear. Right?
Rahul-100x Same thing happens for them with the chat as well. And this is quite annoying from a user's perspective.
Rahul-100x Hence, Facebook thought that they need to do something else and created this framework called React.
Rahul-100x thik hai? So this is what mentioned here as well. Cool hai?
Rahul-100x If, mota-mota jo yaha pe likha hua hai, that is, if there is a single state, and that single state is getting used at two or more different places. Now, agar ek place se us state ko change kiya jaye, all the changes should be reflected to all three places.
Rahul-100x Right? Cool.
Rahul-100x I hope, uh, almost all of you would be able to understand this code. But it's a basic DOM manipulation that is done here.
Rahul-100x I can go through it line by line, but for me it doesn't make sense. But let me tell you, I am just fetching the element using inner text.
Rahul-100x And I am just updating its length. Then I am again using the inner text.
Rahul-100x Then I am adding this particular text. Then I am making a disable called true.
Rahul-100x Same thing, I created a list. This is the code just to display a cart-like functionality for a course booking application.
Rahul-100x Course booking application kaisi dikhti hai? The same as what we have here.
Rahul-100x The same, something like this. Same application ko agar mere ko add to cart feature dalna hoga, to this would be the code which I am going to write.
Rahul-100x So try to read the code, those who don't know what exactly written here. And wo pretty self-explanatory hai sab kuch yaha pe.
Rahul-100x Cool hai? Now, alright.
Rahul-100x So this is what pretty much description of what we have discussed earlier as well. If you want to go slightly in depth, try to read them.
Rahul-100x If you want to get a mind map, you can also read through these books.
Rahul-100x thik hai? But for others, let's start with how React works under the hood. Can anyone tell me how React works under the hood?
Rahul-100x Jinko React aati hai. Tell me.
Rahul-100x Wispr, frontend se hatakar Fiverr pe le aayenge.
Rahul-100x And we can hook like some React Fiverr script workers. Just for use, Fiverr ko hum just for use kar sakte hain.
Rahul-100x One of the main features is state. Second one is the effect.
Rahul-100x To, uh, haan, like state jo persistent memory ki tarah kaam kar raha hota hai. And wo state kis variable ke liye hai, wo decide hota hai.
Rahul-100x Usko call kiya hai. The key position is the JSON stream.
Rahul-100x And within that component, wo kis order mein wo state call hua tha. Like agar teen new states hain, to pehle kaun sa cause banta hai, second kaun sa cause banta hai, third kaun sa.
Rahul-100x Isse hum figure out kar lete hain. Fiverr mein humne do state ko store kiya hai, aur waha wo jo state.
Rahul-100x To woh onset hai, aur phir wahan use.
Rahul-100x Kool hai. Let me try to explain his words in a simple term. The one thing that you guys might see, which is the problem with the vanilla JS, and that is, all the HTML, CSS, and DOM code is present again with the business of your application.
Rahul-100x This is what is the problem. Also one of the problem with the vanilla JS ki jitna bhi mera HTML, CSS ka code hai, and the basic functionality which my application supports, all of the things are present with the business logic of my application as well.
Rahul-100x But what React helps us to do is, React gives us this separation. React kehti hai, if you have HTML and CSS, you can have them in one box, and in the second box you can have your core business logic.
Rahul-100x Try, let's try to understand this with a simple example. You all might remember that in the first class, I have given an assignment of HTML, CSS, and JavaScript, which was add to cart.
Rahul-100x And woh functionality kaisi dikhti thi? It looks something like this.
Rahul-100x I have this whole page on the left-hand side. It shows a number of items.
Rahul-100x Then in here, I have five different items.
Rahul-100x For now, I am going to create only four.
Rahul-100x On the right-hand side, I have this cart. Right?
Rahul-100x This is the cart which shows, let me just name it as basic heading as cart. I have given a button here which says the plus.
Rahul-100x Hmm.
Rahul-100x Alright.
Rahul-100x I have given a button which calls plus. As soon as you click on this plus, let's say in here, if the initial value of item is 4, and here the initial value of cart is 0.
Rahul-100x As soon as you click on this plus button, what will happen? This whole component will disappear from the middle.
Rahul-100x This value will get changed to 3. And here the cart will get updated to 1 with whatever the name of that particular product that was present here.
Rahul-100x And with this price. Let's say for it, it was, let's say, a DSA course with a price of, let's say, 4000.
Rahul-100x Alright, this was the first thing which we did on the day one class. I hope you guys remember this.
Rahul-100x Now, in this whole website, there are particular UI components, there are particular features, and there is some business logic that we have added. Business logic kya hai?
Rahul-100x Business logic is, whenever someone clicks on this plus, I need to change the state of the middle thing here. Aur woh state kya change hogi?
Rahul-100x From the 4, it should disappear the one which got just clicked. I need to update the state here as well.
Rahul-100x I need to decrease this number. Then I need to increase my cart.
Rahul-100x I need to add the value. These are the business logic of this whole application, whole page basically, not application.
Rahul-100x This was the business logic of this page. But there are a few bits which are not the business logic.
Rahul-100x For example, the CSS bit. The HTML and the CSS and the design bit were not the business logic.
Rahul-100x React also gives us the separation of these two.
Rahul-100x Thik hai? In our traditional vanilla, or vanilla JS or HTML, we won't have this separation. We have a very long HTML, uh, index.html file and the index.js file.
Rahul-100x We put everything shoved inside a single these two files. Okay.
Rahul-100x So the UI bit which I just told you is what we called in React as a component.
Rahul-100x And then all the state which got changed, let's say the number got changed something when the onClick happens, this number got changed, and here also this number got changed. That is what we called state.
Rahul-100x So the fun fact about the component is, component can be created once, and then we can reuse that component. For example, initially I have four divs here.
Rahul-100x You can assume the structure of this application. I have this whole big div.
Rahul-100x Then I will have a small div inside it which will contain some image. Then I might have some text here.
Rahul-100x Some text here. And then some price here.
Rahul-100x Some description if I want. And then I will have a button here at the end itself.
Rahul-100x Right? You can assume this structure.
Rahul-100x I have made this application in the normal HTML, CSS. You guys might have seen that you need to repeat this whole code for four different times to create the four different divs, which each would contain some different IDs for themselves.
Rahul-100x You will create a mind map of this. But for the React, what will happen is, you will create this structure once, and then you will reuse this whole structure as many times as you can. So this is also one of the small functionality.
Rahul-100x Ek usi component ka I can give you one example. Let me open my LinkedIn.
Rahul-100x Let's say, navbar of LinkedIn.
Rahul-100x Uh, this is the navbar of LinkedIn-like application.
Rahul-100x Now, in this, what exactly are the components? The components are mostly the reusable thing for our website.
Rahul-100x For this, as you can see this structure, this structure says that there would be one image and one text. For now, forget about the number that's shown here.
Rahul-100x Why? Because this number comes for each and every field that is present here.
Rahul-100x So, uh, let me make different color. Let's say it's blue.
Rahul-100x Let me make it slightly darker. Cool.
Rahul-100x You will see, all of these have the same structure. So what I am going to do, I am just going to create a component.
Rahul-100x For now, component, you can see a set of code which we can reuse. And what is that set of code?
Rahul-100x That set of code is just a collection of HTML and CSS. So let's say this is one of the components.
Rahul-100x And how would that component look? For now, what we will have is, we will have an image tag.
Rahul-100x And then we will have some text. For text, I am just going to use paragraph.
Rahul-100x This is the structure. Right?
Rahul-100x For this, one image, one text, and both are in the center align, which is justify center as a property of CSS. Image, text, image, text, image, text, image, text, image, text.
Rahul-100x For the, if you are not considering this as an image, consider this as an emoji if you want. Okay?
Rahul-100x So this is the structure. So what I can do, I can just use this structure and some sort of, I can say, yaar ek for loop laga lo.
Rahul-100x And that for loop will look something like, we already know what for loop is. How to write a for loop in C++?
Rahul-100x I don't know how to write a for loop in C++. Let's say I have an array.length.
Rahul-100x I hope this is correct.
Rahul-100x What I am doing, I am just creating a for loop, and I am saying, yaar this same thing, this whole structure what you have here should be repeated. Uh, now I can't do this.
Rahul-100x Okay, just, I have two, three, four, five. So I can say, uh, less than equal to five.
Rahul-100x It's some sort of a for loop which says that this structure should get repeated. Now, the second thing is, second thing is, image and the text is also different.
Rahul-100x So it might probably be something like, I am storing the image and text in an array of objects.
Rahul-100x What I am saying, I am, let's say I have this variable called arr, which is, I have an array of objects. What this object will have, this object will have one property as the image, which will be the image URL.
Rahul-100x The second property is going to be the name, which is, let's say, for my case, it's home at the, for the first level. Then for second, let me make it something like this so that you all can see it.
Rahul-100x There would be next image. And then name.
Rahul-100x What is the name? For the second name is going to be my network.
Rahul-100x So on and so forth. Now what I need to do, I just need to do something like this in the image.
Rahul-100x What is the property? To access the image.
Rahul-100x Kisi ko pata hai image mein, sorry, image tag ke andar image render kis attribute ko use karke karte hain?
Rahul-100x So jao bhai.
Rahul-100x Alright. We have this src property.
Rahul-100x And this src property is something like the array that I have created. Just use the image of that particular array.
Rahul-100x And in the paragraph, I am going to render the text of something like, uh, uff CDG guys.
Rahul-100x I just need to write here, dot img. Here I need to write, dot name.
Rahul-100x I hope this mota mota logic is correct. What I have written, I just created one component which looks something like this.
Rahul-100x I used a for loop. And what that for loop does for me is just, it writes five times over this component.
Rahul-100x And then I have a normal in-memory variables. I use that in-memory variables to update the state and hence it gets repeated five times.
Rahul-100x Alright. The hardest bit in React is to figure out what to make a component.
Rahul-100x Kisko component banana hai, kisko nahi banana hai. Alright.
Rahul-100x And from the first principle, anything that is going to be reused more than twice, you need to make it as a component. Agar wo ek se zyada baar use nahi hoti hai, feel free to write it with the vanilla JS.
Rahul-100x Theek hai? With that in mind, let's start with the first thing which we just discussed. A component.
Rahul-100x The same thing is written here that instead of writing a very giant 2000 line of the code, we what we do is, we basically split the UI into the, uh, different different components so that we can reuse those components. Okay.
Rahul-100x This reusability, uff CDG, this reusability and the independent are the two key features of creating a basic component. Cool?
Rahul-100x And then, uh, component is like a function. The only two things what different than a basic component and a function is, component will always start with the capital letter.
Rahul-100x That is the first thing.
Rahul-100x Second thing is, the component will always return something called a g x x.
Rahul-100x Ab ye, uh, we already know that a function can return a number, can return a string, uh, can return some boolean. But what exactly is this gsx?
Rahul-100x This gsx is decoded as JavaScript plus XML, which looks very similar to what you guys write, uh, wo kahan se aata hai, tilde kahan se aata hai, which looks very similar to the traditional HTML tag that you guys are using.
Rahul-100x Sorry? Haan, it's it's good to understand it like this ki I am just using, if I am, if in the React, if you ever create any tag, it's good to think that that tag is a basic HTML tag.
Rahul-100x But the people, those who have created the React will not created this tag as a HTML. They have used something called XML and the combination of JavaScript.
Rahul-100x Okay? And unhone tag ka jo naam hai, they placed their name very similar to what HTML is.
Rahul-100x Why? Because people were initially very friendly towards the vanilla JS and the, uh, jo classic hamari HTML, CSS hai.
Rahul-100x So what Microsoft people did was, they created these tags which are very same or similar to the HTML. But are they HTML?
Rahul-100x No. They are XML.
Rahul-100x Okay? There is a very slight difference, XML, HTML.
Rahul-100x Try to search it after the class. Okay.
Rahul-100x So for a basic course selling like application, kahan hai hamari 100 step?
Rahul-100x So a basic course selling application, if I need to break this whole website down, what I will do is, I will divide this website in the highest at least three order. Aur wo three order kya hoga?
Rahul-100x The three order is, one is going to be the header. That is, whatever the header that you will see.
Rahul-100x Some logo, some text, something to search. Then some button, some, uh, what do you call it, notification with the component.
Rahul-100x And this is also one of the components.
Rahul-100x Theek hai? So this is what the navbar is. But for 100x dev, it's slightly complex that we also have a left side part.
Rahul-100x For now, ignore this. Okay?
Rahul-100x For now, don't worry about what exactly we have on the left. Now, the second bit is, all of these tags.
Rahul-100x As you can see, I told you that the component is going to be something which we will reuse. Don't you think this is also the very similar structure?
Rahul-100x What we have here is, we have this whole div, a big div which contains some image, some text, some text, some text, and one button. Right?
Rahul-100x So I create this structure. I store all of these names and the image in a variable.
Rahul-100x And then I simply write a for loop so that it would get iterated all over like this. This is what mota mota, how we exactly design a component.
Rahul-100x Theek hai? So we already have a footer. Then we will have, sorry, we already have a header.
Rahul-100x Then we will have some body. We are all, where we display the courses card.
Rahul-100x Card is basically the component as well.
Rahul-100x So on and so forth. And then in the end, what we have is footer.
Rahul-100x Theek hai? Main yahan likh deta hoon. Header, body, footer.
Rahul-100x This is the same thing is what we have done here as well. The first thing we have is header, which shows some name and logo.
Rahul-100x Then he has created one filter, we don't worry about it. Then we have this course list.
Rahul-100x Course list contain all the different course card. And then at the end, what we have is footer.
Rahul-100x Alright? And this write course card once, which is the component that I just told you about this particular single component.
Rahul-100x Write code ka once and reuse it for the five courses or the 500 courses. Alright?
Rahul-100x Now, a small mind map about a difference with the vanilla JS and the React is, let's say, uh, in vanilla JS HTML approach, what we used to do is, let's, uh, only create a mind map for now.
Rahul-100x The mind map is, you are booking a cab. You are booking a cab.
Rahul-100x And then let's say you book a cab from step one, two, uh, not step one, let's say, Delhi airport to 100x school. Alright?
Rahul-100x You book a cab. And then you are telling the cab driver each and every direction.
Rahul-100x Theek hai? Maine ek cab book kari from Delhi to let's say 100x school, and while I am in the cab, I am also telling my driver each and every direction that now take the left, now take the right, now take the left. I am telling each and every direction.
Rahul-100x But if we use React, for the React, the mind map is like, you book a cab from Delhi airport to 100x school, and now you don't worry about the direction.
Rahul-100x You don't micro-manage a basic application which is written in React. You just tell him that this is going to be my source, this is going to be my destination, please take me there however you want.
Rahul-100x Alright? So abhi tak hum jo basic script mein DOM likh rahe the, the DOM manipulation code that we have written in vanilla JS, which is like document.getting each element, then removing some text, adding some text, we don't do that in React.
Rahul-100x We just tell the React that this is going to be the state for now. Let's say this is going to be the state.
Rahul-100x And after user do some operation, the state should become something like this. How you are going to change the state in the frontend, I don't care.
Rahul-100x Hence, whatever we used to write with the document.get element will totally disappear when we start learning React.
Rahul-100x Theek hai? Mota mota logic?
Rahul-100x Now, uh, the second part here is, sorry, it's not the part, it's the second topic inside the part two itself. That is gsx.
Rahul-100x Uh, while we understand the gsx, let's learn something about the React as well. Ki how React exactly compiles the code.
Rahul-100x Why? Because we already know that browser only understand the basic HTML, CSS, and JavaScript.
Rahul-100x And Rahul, now you have introduced this concept of gsx. How exactly my browser able to render this gsx inside the Chrome or any browser that you will use?
Rahul-100x Alright? So that is the first question.
Rahul-100x This is how a basic gsx code will look like. Let me copy this.
Rahul-100x Theek hai? Let me go to Excalidraw.
Rahul-100x Okay. What I have written here, although it looks very random, uh, koi baat nahi, chhodo.
Rahul-100x Alright. So what we have here is, I have created a basic function.
Rahul-100x That function is called welcome. As you can see, a component always start with the capital letter.
Rahul-100x So it's the welcome with the capital W. I created sort of a variable here that const student_name is equal to Rahul.
Rahul-100x Now, as it's a function, it should return something. And what's it's returning?
Rahul-100x It's not returning some variable, sorry, it's not returning any number string or boolean. It's returning a gsx which looks like a HTML code.
Rahul-100x It's returning h1 class name. For now, if you don't know what class name is, you all might remember the class, which is a CSS attribute that we have learned in the HTML CSS.
Rahul-100x I am adding some CSS here. If I want, I can remove this.
Rahul-100x I just have one h1 tag which has written welcome. And I have some curly braces here.
Rahul-100x As you will see, if you want any JavaScript code to get injected into your HTML, you need to use these curly braces. We will see them agar hum code karna start karenge.
Rahul-100x For now, these are the small small topics. I have the student name here, then exclamatory the closing h1.
Rahul-100x Ab ye kaisa ban jaayega? It would look something like this.
Rahul-100x Welcome Rahul.
Rahul-100x Why? Because this variable got replaced by whatever the state that I have created.
Rahul-100x Alright? This whole thing is a component.
Rahul-100x This is sort of a state which is a variable. And then this is the gsx code which I am written.
Rahul-100x Cool?
Rahul-100x Yes, that is how everything works. In React, we have two main concepts who I have written here, which is called Babel.
Rahul-100x Those who already know React, what is Babel?
Rahul-100x Babel, guys, it's open source.
Rahul-100x Babel, Babel, Babel, Babel. Anyone?
Rahul-100x Kisi ne Babel ka naam hi nahi suna?
Rahul-100x Okay, cool ah. So what exactly happens is, right now what I have written is, I have written a gsx code and browser can't read a gsx code directly.
Rahul-100x So what it's doing, behind the scene, there are something called as a build tools. Alright?
Rahul-100x And what these build tools are like, for example, one is Vite which, uh, we will learn. Agar hum Vite mein karenge toh although we are going to use Bun, to forget about it.
Rahul-100x For the those who are going to use NPM, unke liye Vite hai. And then there is second thing called Babel which React use under the hood for themselves.
Rahul-100x Okay? So it's a build tool.
Rahul-100x Aur build tool ka kaam hota hai to compile a gsx code into something which your browser will understand. Cool ah?
Rahul-100x So this is what Babel is. The same flow I have written here.
Rahul-100x What we have written till now, we have just h1 tag. Uh, forget about this class name.
Rahul-100x If those who able to understand it, this is just a CSS. Then I have welcome and then there is Rahul.
Rahul-100x Why I have directly written Rahul? Because this will get injected into here when we actually return something from here.
Rahul-100x Theek hai? Now what will happen, our Babel will compile this particular code.
Rahul-100x Theek hai? And once it compiles the particular code, what runs in the browser which looks very similar to the browser's JavaScript. As we already know, JavaScript is of two types.
Rahul-100x One is a backend JavaScript, I hope you guys know, and one is frontend JavaScript.
Rahul-100x Right? So what Babel do is, Babel exactly compile your code in something your browser will understand.
Rahul-100x Theek hai? Which is a frontend JavaScript. And this is a sort of a code which your browser exactly read.
Rahul-100x And then it returns a plain object which looks like a virtual DOM. Toh isko agar thoda sa simplify kar dete hain, thoda sa high level ho gaya hai.
Rahul-100x Kyo? Kyunki yaha pe ek topic aa gaya virtual DOM ka.
Rahul-100x Now let's come back here.
Rahul-100x What will happen is, there is our function which we just wrote. This is the function.
Rahul-100x This is the function that we just wrote. This function is returning a gsx.
Rahul-100x What will happen is, there is a build tool which will convert this code into something your frontend browser can read. Alright?
Rahul-100x Also, there is one more in-memory operation that happens. And that operations will create something called as virtual DOM.
Rahul-100x Ab ye virtual DOM exactly hota kya hai? This virtual DOM is just a object.
Rahul-100x For those jinako deeper jaana hai, aap ja sakte ho. But the high level, it looks very similar to the object and the nested objects inside it.
Rahul-100x And ye nested objects kya hote hain? I hope everybody know what is DOM.
Rahul-100x Hamne HTML CSS mein padha tha. What is DOM?
Rahul-100x The virtual DOM will have the same structure as the original DOM which browser will have for a application. And wo exactly kaisa hota hai?
Rahul-100x It looks nested objects. For us, we just created this single function.
Rahul-100x To uska virtual DOM aisa dikhta hai.
Rahul-100x Let me copy it. Let me come down here.
Rahul-100x We would have two states and then, uh, here.
Rahul-100x What's written here? Type is h1.
Rahul-100x That it's a h1 tag. Then there is something called props.
Rahul-100x Props is a short form of property. This class name is a short form of the CSS class that we have.
Rahul-100x This is the type of class that we are going to use title. If you want, you can remove it.
Rahul-100x For example, here we have not included it. So I will just remove this whole one.
Rahul-100x Now what I have next is children. Children is basically whatever present inside this opening h1 and the closing h1 will be a children.
Rahul-100x For now, children is just a string for me. Later, it might happen that children is also an object.
Rahul-100x So it becomes a very nested object. The browser also store your whole application like this.
Rahul-100x Your React also store the whole application like this. Now what exactly happens is ye jo re-rendering, re-rendering log kahate hain, this re-rendering buzzword, what exactly this is?
Rahul-100x If I have a website which contains some head, then some body, this body will have, let's say, uh, some h1, then it will have, let's say, some tr, then let's say, some list.
Rahul-100x And then in the end, this body will also have something called as footer. And footer is also going to be what is the footer tag?
Rahul-100x Let's say footer. So this is what a DOM stores.
Rahul-100x It is a tree-like structure. And how exactly browsers store the DOM?
Rahul-100x Similar with the nested objects. Same thing Reacts do.
Rahul-100x Now, if you are writing your code in the vanilla JavaScript, what will happen is, if there is a single state change that happens, for example, if this website, not this website, if this LinkedIn page was written in vanilla JavaScript, as soon as I click on this notification, or let's say this connection, I click on this connection, this whole page that comes right here got render first. Like every HTML gets loaded.
Rahul-100x Now let's say if I click on this particular button, as soon as I click on this particular button, this whole page will again re-render if we have written the code in vanilla JavaScript and the HTML. That's how your browser DOMs work.
Rahul-100x But React people thought that this particular state that got changed. Why we are rendering the whole page for this?
Rahul-100x We just need to renders all the different component that are using this particular state. For example, pahle yaha pe ek halka sa bada button dikh raha tha.
Rahul-100x Now as soon as I click on this plus button, only that single thing got changed. Right?
Rahul-100x Now it's become slightly shrink. Ek message change ho gaya.
Rahul-100x Those two buttons got removed. I can see this cross here.
Rahul-100x Again, if I click on this button, what will happen? Only whatever the part that was present here got disappeared.
Rahul-100x Nothing else in my website re-renders. Why?
Rahul-100x Because LinkedIn is written in next, uh, in React for now. Let's assume.
Rahul-100x Theek hai? That's what React do under the hood. React always create a virtual DOM which looks very similar to your original DOM.
Rahul-100x If any change happens whenever user click or performs on your website, he will figure out the exact place where that change has happened. Let's say that change has happened only on the footer.
Rahul-100x So React will figure out that this is the place where that change has happened. We just need to render this particular page again.
Rahul-100x And hence, React will only change this component. It will not change any other thing inside your website.
Rahul-100x I guess this ye cheez samajh aayi? Like it's a very high level.
Rahul-100x But agar kisi ko koi doubt ho to feel free to ask me.
Rahul-100x Sorry?
Rahul-100x DOM is a concept that exists in the browser. Wo browser pe rahega hi rahega.
Rahul-100x Why? Because it is associated with the version 8.
Rahul-100x Alright? To wo topic to wahi rahega.
Rahul-100x DOM will be there. What React has done is, right now, what will happen anytime this DOM has a property that if anything in your website changes, I am just going to re-render all the things that is present.
Rahul-100x I am just going to render each and every tags again. But React people thought that this is becoming the bottleneck for them.
Rahul-100x Why? Because if any state gets changed in here, even though why it's coming so much?
Rahul-100x Even if a single state gets changed, this whole page is rendering but the state is not getting changed. Like for example, yahan pe agar 4 likha hua hai, I click on this button, I want this whole page to get re-render and I want this 4 that is written here at top of notification to be disappeared.
Rahul-100x This page is getting render but yahan pe 4 change nahi ho raha hai. That means there is no synchronization between a state and a component.
Rahul-100x Ye cheez samajh aayi? Okay.
Rahul-100x VDOM is cheaper to use because VDOM happens at a in-memory. It does not happen at a browser level.
Rahul-100x React stores the similar structure of the website in the memory itself. Okay?
Rahul-100x And that's how we recalculate everything very fast. And hence he able to figure out the exact position or exact thing that he needs to change.
Rahul-100x And he just only applies those changes to the browser. For now, the only thing we don't know is jab hum browser mein change karte hain toh poori website change ho jaati hai.
Rahul-100x Right? If I make any change in the normal vanilla JS code, the whole website gets re-render.
Rahul-100x But if React is doing it, how React only able to render the small bit of it?
Rahul-100x Okay, so let me give you this as a assignment itself. Try to search this.
Rahul-100x Try to use your GPT.
Rahul-100x Theek hai?
Rahul-100x So the question is, if I make any change in the normal vanilla JS code, my whole page gets re-render. But if React updates or changes in the original DOM, why DOM doesn't get re-render completely?
Rahul-100x Theek hai? It is only for those jinko thoda deep jaana hai, warna koi sense hai nahi itni sab cheezon ka.
Rahul-100x Alright? No.
Rahul-100x The max they will ask you is what something called hot reloading. Like how exactly hot reloading got implemented.
Rahul-100x I don't think uske upar kuch poochhenge woh. Cool.
Rahul-100x They might ask you what is Babel as well. Yep.
Rahul-100x Now a few more topics I can tell you, but theek hai, unko chhodo. Okay guys, let's come back.
Rahul-100x Four essential rule of JSX. JSX is JavaScript, XML.
Rahul-100x Always remember this. The first thing that returns a single root element.
Rahul-100x That means if I am creating a component and this component should always return a single root element. That means iska code aisa nahi ho sakta ki I am returning some h1, then I am returning a div which is something like this.
Rahul-100x What they want is, they want a single root element. Uske andar aap kitna bhi nested bana sakte ho.
Rahul-100x It's totally up to you. So if I am declaring a div, I can't use this h1.
Rahul-100x If I am using h1, I can't use this div. Agar mere ko use karna hai toh mere ko iske andar hi h1 banana padega.
Rahul-100x And that's how I need to do it. So the first rule says returns a single root element.
Rahul-100x Okay? A component cannot return two sibling stack.
Rahul-100x Wrap them in a div or empty fragment. What they want is ki if you want a h1 and a paragraph to get returned, what you can do is make a high level of div, then add your h1 tag inside it.
Rahul-100x And then I can have my p tag here as well.
Rahul-100x Alright? First rule, there should be a single parent.
Rahul-100x Either I can use a high level div, or if I don't even want to introduce that div, what I can do is, I can just create something like this. This is a concept of React which we called as fragment.
Rahul-100x Alright?
Rahul-100x Now, till now in the HTML, what we have learned is, if I have some open, uh, let's say open tag, there would be equivalent closing tag for that as well. For h1, I have these two tags.
Rahul-100x But in React, we have some tags which are just a self-closing tag. For example, image is a self-closing tag.
Rahul-100x There will not be a open image tag and close image tag. Image is self-closing.
Rahul-100x Same thing goes with the input tag. Same thing goes with the br tag which is a break line.
Rahul-100x Theek hai? Third thing, class name instead of class. In normal HTML CSS, we use this class keyword taaki hum CSS apply kar paayein for that particular tag.
Rahul-100x In React, we have this keyword called class name for that. Okay?
Rahul-100x Now, uh, third thing, use curly braces for JavaScript expression. We just discussed this.
Rahul-100x That this is a sort of a JavaScript code itself. I am just declaring a variable.
Rahul-100x If I want to inject JavaScript into this return type, I need to use something called curly braces. And curly braces, I can just mention the same variable name.
Rahul-100x Alright? This is how we use JavaScript inside a return JSX.
Rahul-100x Now, uh, try to read this as well. For example, JSX ke andar main expressions, I can do the arithmetic expression.
Rahul-100x I can call the properties of an object. If user is an object, I can call the dot name.
Rahul-100x I can also, I oh, sorry, one thing, you can never perform a, a, what do you call that, conditional statement in return. For example, main yahan pe kabhi if else ka code nahi likh sakta.
Rahul-100x If, let's say, for now I am writing if logged in return hello else.
Rahul-100x Let me write curly braces. This is how we generally write if else code.
Rahul-100x Let's say I am returning something. And then, uh, I can't write if else which is what we call conditional statement in the return.
Rahul-100x For that, what we need to use, we need to use some operators. How many of you are aware of this?
Rahul-100x Question mark.
Rahul-100x Ternary operators. Cool.
Rahul-100x So ternary operators are also used as a if else statement. For example, agar main ek basic sa code yahan pe likhun ki let's say if isNumber mod 2 triple equal to 0, then what I need to do, uh, let's say I am just logging even and, uh, here I can say else or this is what we write in normal language.
Rahul-100x For the ternary operator, how would it look like? It would look like isNumber mod 2 triple equal to 0.
Rahul-100x Then comes the question mark. If this particular condition is true, then I need to log the even.
Rahul-100x And how to write else statement? We just do two colon here.
Rahul-100x This is what the else statement will look like. Else or.
Rahul-100x This is how we generally write if else by using ternary operators.
Rahul-100x Theek hai? If I want to make it if else if else if else if, I can do that as well. I hope everybody knows wo kaise karte hain.
Rahul-100x Nahi pata? Yes.
Rahul-100x Search kar lena. Okay.
Rahul-100x This is the same thing what we can do in React as well. React mein main if else nahi likh sakta.
Rahul-100x But I can write this ternary operators. For one example is, is logged in log out kar do, else log in kar do.
Rahul-100x For example, you might have seen at the top of your nav bar, whenever you are logged in to some application, it won't say logged in to you. It always says log out.
Rahul-100x And if you are log out, it would say log in. So this is how they have implemented a simple ternary operator.
Rahul-100x Theek hai? Same thing, you can't use for loop inside a JSX code as well. Main jo ye code tha here, I can't write a simple for loop.
Rahul-100x Can anyone tell me why I can't do it?
Rahul-100x Why I can't just write a simple for loop? This is also one of the super duty interview questions.
Rahul-100x That is, can I write a for loop inside the return statement of a JSX component? And most of the people, you would be surprised, say, yes, we can do it.
Rahul-100x But we can't. Why?
Rahul-100x Because for loop does not returns anything. Alright?
Rahul-100x We just iterate over some in the for loop. But agar humko for loop JavaScript mein use karna hai, what we have, we have something called dot map.
Rahul-100x I hope all of you already know JavaScript. So dot map is something we can use.
Rahul-100x Why? Because map returns us an array.
Rahul-100x Alright? This is something which I already told you.
Rahul-100x Virtual DOM drifting and this is called reconciliation. Those who want to dive slightly deeper, they can go through this.
Rahul-100x Ki ye exactly kya likha hua hai yahan pe. What is virtual DOM?
Rahul-100x What is drifting? What is reconciliation?
Rahul-100x But do you need this? Probably not.
Rahul-100x Kya aapko high level jaanna chahiye? Yes, you should.
Rahul-100x You should always know this topic at a very high level. Why?
Rahul-100x Because what is reconciliation is a 99% chance that this will come in a front-end interview question. What is reconciliation?
Rahul-100x What is virtual DOM? How virtual DOM prevents re-rendering?
Rahul-100x Alright? And then Babel.
Rahul-100x These three are the very fundamental core React questions.
Rahul-100x Cool hai? Try to read this whole thing.
Rahul-100x I think it's very self-explanatory. If you are already able to understand the class till now, ye samajhna bahut mushkil nahi hoga.
Rahul-100x Theek hai? Uh, it's already 12:30. Alright guys, let's quickly start with the setting up a React project.
Rahul-100x Theek hai, bahut jargon ho gaya. So what I am going to do, I am going to open my terminal. But before I jump to the code, let me ask online.
Rahul-100x Let me launch a poll. Did you guys able to understand up to this point?
Rahul-100x We have only learned about the jargon, but we have not grown in depth. Toh mota-mota hi padha hai.
Rahul-100x Uh, just wait a second. Let me close this.
Rahul-100x I am seeing this. Haan, wahi kar raha hoon.
Rahul-100x Ye chale mera Mac to na.
Rahul-100x Uh, I have this poll and quiz. And then I go to the back.
Rahul-100x I come down here and I relaunch the poll. Yes.
Rahul-100x mag yaadituun Mohan kaadhaychi ka? Aapan Mohan kaadhalay.
Rahul-100x nahi, mota-motahi padne wala hai. We don't want to go in depth.
Rahul-100x But those who are not able to understand, feel free to ask it out after the class.
Rahul-100x Alrighty. Let's start with the code.
Rahul-100x What I am going to do is, I am going to use bun to create a basic React project. Alright?
Rahul-100x And we have also covered TypeScript. So we can also use some TypeScript code here.
Rahul-100x Those who are using npm, what you guys need to do is, you guys need to use this we just learned. This is what we called it.
Rahul-100x kya bolte hain ise? Vite aur Babel ko kya bolte hain?
Rahul-100x Build tools. You guys need to use this build tools to start with the React.
Rahul-100x Node.js is a runtime. Node is not a build tool.
Rahul-100x wo compiler hota hai na, that is TypeScript compiler. It is just compiling that particular code into a different thing.
Rahul-100x Alright. Let's come back here.
Rahul-100x What I am going to do is, I am going inside the folder.
Rahul-100x I am going to create a new file here which is November.
Rahul-100x Alright, I am inside the folder. Now what I am going to do is, let me open my this empty folder inside a IDE.
Rahul-100x For me it's cursor. Let me zoom in a bit.
Rahul-100x Alright. What is the first command that we do whenever we create a React project?
Rahul-100x That is, for the server, if I need to create a server in bun, I just do bun init.
Rahul-100x And then I select a blank if I need to create a backend. But if I need to create a frontend, what I will do is, I will just select React.
Rahul-100x Now you will see three options here. Either I can create an empty blank, uh, React project which will not have any integration, not any CSS.
Rahul-100x It would be present with the default CSS. Second thing is something called tailwind.
Rahul-100x How many of you know what is tailwind? Okay, how many of you don't know what is tailwind?
Rahul-100x Okay, so tailwind is pretty simple. Till now what we have done is, we have only used our core CSS.
Rahul-100x Core CSS kaisi dikhti hai? The core CSS looks something like.
Rahul-100x There would be key and value pair in our core CSS. If I have a background color, I write it something like this.
Rahul-100x Background color red. Right?
Rahul-100x This is how my core CSS looks like. Similarly, I just, I can write, I guess I can write a comma.
Rahul-100x And then I can again need to write some key value pair. For example, border radius.
Rahul-100x Okay. Something like this is what we have in our normal CSS.
Rahul-100x Tailwind just helps us to write CSS in a much more clear way. What I can do in tailwind is, I can just have a very long string.
Rahul-100x And in this string, I can see that your background color red. This would automatically get changed into something like background color red, which browsers understand.
Rahul-100x theek hai? This is the one property. Second is border radius.
Rahul-100x Inside writing the whole border radius. I can just write border 2 pixels.
Rahul-100x Alright? So this is just a short way of writing the CSS which we jo hum traditionally bahut bada likhte the.
Rahul-100x Those who want to get deep dive into tailwind can also use Tailwind docs. Super crazy docs, guys.
Rahul-100x This is the Tailwind docs as you can see.
Rahul-100x If I just need to increase the number, this is how I can do it.
Rahul-100x This is also one of the way of writing, uh, the CSS inside a React project. And not only React, you can use Tailwind with your HTML as well.
Rahul-100x It works with everything.
Rahul-100x theek hai? So for now I am not going to use this. P7 I hope already know what is this.
Rahul-100x This is padding 7 which get applied to all four sides.
Rahul-100x Tailwind is not a build tool, it's just a library.
Rahul-100x So I can use Tailwind. If I select on Tailwind, uh, the default template that I will get React, my Tailwind would be automatically gets integrated with it.
Rahul-100x I don't need to do any hectic of integrating these two. Although integration mein kuch jyada mehnat lagti nahi hai.
Rahul-100x All the steps that you need to integrate a Tailwind to a basic project. If you are using Vite, just follow this.
Rahul-100x Copy paste few commands from here and you will be able to do it. Alright?
Rahul-100x For now I am not going to use Tailwind. I am just going with the default blank project.
Rahul-100x A lot of files got created. Let's quickly look at those files.
Rahul-100x Alright. Uh, let's do one thing.
Rahul-100x Let's take, uh, guys, take a one minute of breather and then we will go through all of these files and how the React projects get structured.
Rahul-100x theek hai? So take a one to one or two minutes of breather.
Rahul-100x Sorry? No, you need to use a build tool which is Vite to create this template of React.
Rahul-100x aap npm ke through nahi kar paoge. I mean kar sakte the, sorry, main kya bol raha hoon.
Rahul-100x Uh, previously we used to use npm create React app. Uske baad there is a bundler that comes called Vite.
Rahul-100x Now we use Vite majority, but people are now shifting towards bun. And most of the time whenever you create a frontend, you use Next.js.
Rahul-100x But for now let's just only use bun, it would be super simple.
Rahul-100x No dear, to Vite use kar lo. Haan, create Vite@latest hyphen hyphen the project names of.
Rahul-100x Theek hai, sir. Zaroorat ho toh aap log problem banakar ChatGPT ka use karke kar lete hain. I mean, uh, we can use ChatGPT.
Rahul-100x I mean, uh, how should I put this? Most of the time we use ChatGPT.
Rahul-100x Why? Because right now the models that are coming are already trained on few of the, uh, components that are present on ChatGPT.
Rahul-100x Toh isliye log ChatGPT bhi use karte hain. Claude bahut aasaani se generate kar deta hai.
Rahul-100x But that is the problem that is happening ki Claude itna zyada train ho gaya hai ki now he don't want to use ChatGPT. Woh kehta hai ki main ChatGPT ka code khud hi likh leta hoon.
Rahul-100x So most of the time whenever you give a prompt to the Claude and you ask him ki yaar yeh website bana do, he won't use any library. He was already got trained on few of the components which are very open source.
Rahul-100x For example, Tailwind, it's open source. Claude gets trained on it.
Rahul-100x Same thing happen with the many components. Toh ab Claude woh khud hi karta hai.
Rahul-100x So that is also why ChatGPT are facing this, that people are not using their website. Why?
Rahul-100x Because how ChatGPT earns money is basically they have a public component. I hope jin log those people who are slightly advanced, they have very almost all of their components are public.
Rahul-100x What they do is they create something like a ad or a paid component for their website. Now what they want is they want people to use their website for documentation or all.
Rahul-100x So that people can also look at those premium components or any ad that they are playing. But right now everyone is very lazy.
Rahul-100x They just ask their Claude to search for the component, get the components, and implement it. So that's why they are also losing some revenue.
Rahul-100x But, uh, they have few tie-ups with the very big organizations and hence they are surviving this. But Tailwind is not surviving.
Rahul-100x So that's the thing.
Rahul-100x Cool hai? Uh, test will start at 42.
Rahul-100x Theek hai? It's just two minutes.
Rahul-100x Cover toh bahut kuch karna tha, hum bahut hi peeche hain.
Rahul-100x Uh, alright guys, let me open the chat. Uh, why my chat is not opening?
Rahul-100x Haan, is time. Chat is done.
Rahul-100x Perfect. Uh, they can use, but not inside the JSX.
Rahul-100x Yes, uh, that's what the interview question was, right? That can you use for loop inside a JSX, uh, inside a component that is returning a JSX.
Rahul-100x Uh, I mean build tool comes with the functionality of compiler too. Same here with it.
Rahul-100x Can you give quick request? Uh, I would suggest you to just go through the notes and that notes would be more than enough.
Rahul-100x Just screen through them.
Rahul-100x Please shaking virtual dorm diffing everything. Wait, uh, the point which I left was this.
Rahul-100x Uh, where is it, where is it in the notes? It was this: virtual dorm diffing and reconciliation.
Rahul-100x This is a topic you can go very niche in depth if you are looking for the frontend opportunity. But for those people, those who just want to build a computer science IQ, you should not go in depth on them.
Rahul-100x I mean just know them high level. That's more than enough.
Rahul-100x In this project as well with the, I mean guys, see, if you know how to make a API call, see, let me tell you. If you know what is React query, which we might cover in state management, then GraphQL also work the same.
Rahul-100x Just same query, same mutation. The logic remains the same.
Rahul-100x It's just, uh, slightly different implementation. You get a very nice UI to make the request to test your application, so on and so forth.
Rahul-100x What's the difference?
Rahul-100x I mean bun also use its own build tool to create a React application. That's what people do, right?
Rahul-100x When you have an unlimited amount of token, you just use something called REA, which is reverse engineer application, which is a basic tool for Claude or Codex. And you just create the same functionality for yourself.
Rahul-100x That's what people did. People just take the Babel, which was open source, and then they use some optimization on top of it.
Rahul-100x Then they create their own build tool. The bun did the same thing.
Rahul-100x Alrighty.
Rahul-100x Virtual dorm, reconciliation, auto loading, and Babel. I mean, uh, the start of React ke liye itna hi hai.
Rahul-100x When we start, when we start going depth in React, there will be more interview questions. Mota-mota itna hi hai.
Rahul-100x Alright guys, let's start with the initialization of React. We have learned a lot of jargon today.
Rahul-100x And we would not be able to catch up to navigation if we are at the space.
Rahul-100x Then, uh, okay.
Rahul-100x I mean, let's see how much we can complete. Cool.
Rahul-100x Now let me open my IDE, which already contains all the folder which aur command kya use ki thi maine? The command that I used was bun init.
Rahul-100x Now the first thing, whenever any application that you open, the first thing you do is you open their package.json file. Why?
Rahul-100x Because it's a template. It might contain some other packages inside it.
Rahul-100x So just try to go through the packages. From the packages, I can see that there is a section called script.
Rahul-100x And there are few script that is already present here. Kya karti hai script?
Rahul-100x Don't worry about it. But there are some script.
Rahul-100x Second thing is dependency. This template depends on two things.
Rahul-100x One is React. Second one is React dorm.
Rahul-100x These are the two packages that React uses. Pehle kya hota tha?
Rahul-100x For those who have, uh, React version less than 19, for them we have React dorm got split into two bit. Kisi ko yaad hai?
Rahul-100x Kisi ko yaad nahi hai? Okay.
Rahul-100x Right now we only have a React dorm here. But previously, when we have React 17, 16 or something, us time pe this was never a package.
Rahul-100x Hamare paas package do different package hote the. One package to create a browser.
Rahul-100x Second package is to create a mobile application. Now what the React 19 or the people, those who are working on the React, what they did was they merged everything inside a single package: React dorm.
Rahul-100x So now if you need to create a mobile application, use the same thing for the Android basically. Uh, and if you want to create a website, use the same thing.
Rahul-100x Theek hai?
Rahul-100x Now, yes, for React native, we, I mean React native is what we called for the Android application ya mobile apps hamko jo bhi banane hote hain.
Rahul-100x For that, we also use this package called React dorm itself. Cool.
Rahul-100x Now there are few files jo main directly I can delete them. For example, I don't need to read README for now.
Rahul-100x This claude.md file is also something which I don't need it. Now we have this bun lock.
Rahul-100x Bun lock is similar to what we have for the package lock.json file jo hamari basic Node.js mein hoti hai. It contains nested packages and what are the versions of nested packages of these two that are present.
Rahul-100x Ki React package bhi to ho sakta hai ki teen chaar packages ko milakar ke bana ho. So all those packages, their version get stored in here.
Rahul-100x Then let's come back to the SRC. SRC is where your main project will start.
Rahul-100x Theek hai? The first file here called api.tester. Only people, those who have created your React project with bun, will see this file.
Rahul-100x And the fun fact is, you will never touch this file. If you want to delete it, delete it.
Rahul-100x But later, whenever we write test for our frontend application, although we might not cover this in the winter app, but whenever we write the test, at that moment we are going to use this api.tester. For now, we don't need it.
Rahul-100x Kya mujhe pehle karna tha? Only for the backend.
Rahul-100x Yes, that test is only for the backend. Frontend mein bhi test likhe jaate hain. And we have many different concepts of writing frontend test.
Rahul-100x For most of the time, whenever any GSOC application you will see open source, those application, you can see that they have already implemented the frontend test. So that they can cover each and everything.
Rahul-100x Ab wo kaise likhte hain, kya hota hai? Uh, we will learn about it when we get there.
Rahul-100x Cool. Now what I am going to do, I can see there is something called app.tsx.
Rahul-100x Right. Before touching this file, I have one more file called frontend.tsx, index.css, index.html, index.ts.
Rahul-100x There are a lot of files you can see here. The first thing here is index.ts.
Rahul-100x What I would tell you guys is, don't worry about this right now. Jab hum React mein thoda aur niche jayenge, we will learn about this concept of index.ts.
Rahul-100x But for now, how many of you know this concept of auto loading?
Rahul-100x Auto loading. Okay, we will come there.
Rahul-100x The first file that I am going to open is index.html. Try to screen through this file.
Rahul-100x I have a head tag. I guess zoom enough.
Rahul-100x You all can see on the screen, right? Perfect.
Rahul-100x I have a head tag which contains two metadata, then one link tag, some title, header, then body. Then in the body, I can see two things.
Rahul-100x One is an empty div which has an ID called root. Second thing is something like a script tag that imports all the JavaScript scripts from this particular location.
Rahul-100x That is what script tag is doing. That's why I told you, you should always remember the place where we exactly use the script tag, that is end of the body tag.
Rahul-100x Now what is happening? If I open this frontend.tsx, what this frontend.tsx is saying?
Rahul-100x It is saying that yaar kuch code likha hua hai. There is some code written at this particular file called app.
Rahul-100x Import all the code that is present here. And then what you need to do, document.getElementById("root").
Rahul-100x That means from this div that is present inside this body, you are fetching all of this div at here and storing that div in your element. It's just a variable.
Rahul-100x Ek variable mein poora ka poora element utha ke save kar liya. Now I have this variable called app.
Rahul-100x I can also remove this something called strict mode. What is the strict mode?
Rahul-100x Whenever we are in a development mode, whenever we are creating a React application, React always renders everything twice. Why?
Rahul-100x Because just for a strictness. Whenever you deploy your React project in the production, it would work perfectly fine.
Rahul-100x It would only render a single thing at once.
Rahul-100x Theek hai? So we can remove this, but for now let's keep it here. The only use case is, it will re-render every component twice.
Rahul-100x If I am changing one component, it will render that component two times. You will see a slight blink if you have an extension.
Rahul-100x Theek hai? I am importing some code that is written at /app. What is the code that is written at /app?
Rahul-100x I can see a lot of jargon code that is written here. What is the first thing I am going to do is, I am going to remove everything from here.
Rahul-100x Let me remove these line as well. Let me remove these as well.
Rahul-100x What was the first property of a component? Humne kya kaha tha?
Rahul-100x Humne kaha tha component is just a function which starts with a capital letter. It is starting with capital letter.
Rahul-100x And that component should return a single children. That means a high-level div.
Rahul-100x And inside div, I can have a h1 or a p tag. This is a component.
Rahul-100x And now what I am doing is, I am doing export default app. Generally, whenever you create a component, you always create a file, add a .tsx.
Rahul-100x Why? Because right now I am going to write my code in TypeScript.
Rahul-100x That's why tsx. Jo JavaScript mein likhenge, for them it would be like jsx.
Rahul-100x Difference zyada hai, koi difference nahi hai. We already know TypeScript JavaScript mein hi eventually convert hoti hai.
Rahul-100x Alright. For us, it's going to be TypeScript.
Rahul-100x And then I am default exporting this app. Single page.
Rahul-100x We already know we can only default export a single thing from a file. Agar ek file hai, usmein se default export ek hi cheez hoti hai.
Rahul-100x Now what I am doing, in my frontend.tsx, I am importing this component. Itna logic samajh aa raha hai?
Rahul-100x There is a component. I am importing the component here.
Rahul-100x There is an empty div. I am importing that div here.
Rahul-100x Cool. Now this is the line which is very important.
Rahul-100x What this line is doing, this line is saying that create root element. What was the element?
Rahul-100x The empty div which we have in the HTML file was the element. Someone is saying that create root element.render app.
Rahul-100x That means we already know what is the structure of a virtual dorm. The virtual dorm structure is like a nested objects.
Rahul-100x This line is saying that you need to create a root element, which is like a root element, which is a very parental object.
Rahul-100x Till now, we don't have any virtual dorm. Now what it did was, it says that create root will create this empty object.
Rahul-100x And then the second command says render app. What would be the render app?
Rahul-100x Render app basically means that render this whole component. That means how virtual dorm store these data is like a object.
Rahul-100x We have learned this into the React as well. Kahan pe tha?
Rahul-100x It was at a place, uh, just give me a minute.
Rahul-100x Okay, I, uh, this was the code. As you can see, this was how a small, very section of a virtual dorm will look like.
Rahul-100x I have the type of h1 properties which have a something called children which contain the text inside that element. We are going to create something similar for the app.
Rahul-100x So for our application here, what we have, we have a parent div. So it would look something like this.
Rahul-100x Uh, yes, here. Here it's going to be type.
Rahul-100x It's going to be div.
Rahul-100x And then children is again going to be a object. Why?
Rahul-100x Because children is not a single string for us. For us, children is also have its own type.
Rahul-100x There can be many children, so it should be an array or object. The first children contains the type as h1.
Rahul-100x So it would be h1. The second bit here is, we have something called props.
Rahul-100x Oh, sorry. Let's assume this children is also inside the props.
Rahul-100x Main hi likha nahi yahan pe. Uh, props will have this property of children.
Rahul-100x Yeh code kitne logon ko samajh aa raha hai? Like, it's very hard to understand just from this much.
Rahul-100x Just give me one more second. Alright.
Rahul-100x Alright guys, this is a very high-level code which I have written. What is the first thing I have?
Rahul-100x I am, I have this parent object which is type of a div. It has a property called props.
Rahul-100x Props is a object. This is the object.
Rahul-100x Props contain a property of children. For me, right now, children is not a string.
Rahul-100x For me, children is a array. Why?
Rahul-100x Because this div contains two children. The first children is h1 which has this children of text.
Rahul-100x The second children is p. And p has its own children of this particular text.
Rahul-100x And yeh cheez main kaise kar raha hoon? I am doing it with the help of this.
Rahul-100x Previously, we created a object which is returning h1 with some text inside it. This is how its virtual dorms get created by the React.
Rahul-100x Alright, type props. If he has any classes or not.
Rahul-100x If there is any children or not. Here, children is a string.
Rahul-100x For my div, children is going to be a array which contains these things. Alright, slight complex, but try to imagine a object gets created whenever this .render app gets called.
Rahul-100x A very big object which contains all the state from the top to the bottom. Alright.
Rahul-100x Yeh code samajh aa raha hai sabko? So what is the flow right now?
Rahul-100x Flow hai, from index.html, we will fetch the empty div.
Rahul-100x From our app.tsx. App.tsx will always be your entry file.
Rahul-100x From the app.tsx, we are fetching the app component. And where we are exactly fetching it?
Rahul-100x We are fetching it at the frontend.tsx.
Rahul-100x Frontend.tsx. And what this frontend.tsx is doing, it is saying that create root element.
Rahul-100x That this is our root element which is a single div. Every code that will be written in app.tsx or in his children will eventually get render inside this single div itself.
Rahul-100x I will show you this while running the code as well. What it will do?
Rahul-100x It will just create root. If you want to go in depth, you can assume that it's just creating a very big object which contains all the children and the app component.
Rahul-100x Alright. And it is using this particular div element to render this whole object by using build tool.
Rahul-100x ye code samajh aa raha hai? This is the high-level flow.
Rahul-100x Cool. And this object which just got created with this .render.
Rahul-100x This .render. What this object will be like?
Rahul-100x This object is what going to be your virtual dorm. Mota-mota samajh aaya?
Rahul-100x Any doubt anyone have till here? Cool.
Rahul-100x Let's try to run the code so that we will get a very good gist of what exactly is happening. How to run a React code?
Rahul-100x We already know there are scripts that is present. For us, it's going to be bun dev.
Rahul-100x And for we people, it's going to be v dev. I am just going to bun dev.
Rahul-100x And my server gets started at port 3000. We already know that whenever we create a server in Node.js, that is also runs on 3000.
Rahul-100x So make sure aap dono code ko same port pe run na kar do. Alright.
Rahul-100x Now this is how the code looks like. I just created a simple div which contains hello and this is a test.
Rahul-100x Hello and one paragraph, this is a test. Now the first problem is, why it's coming at a center?
Rahul-100x Why there is something that is moving in the background? We have not written any CSS till now.
Rahul-100x Why? Because there is an index.css file which gets applied to this whole application.
Rahul-100x What I can do is, I can just remove every CSS.
Rahul-100x Alright. As soon as I make a change here, what will happen?
Rahul-100x Automatically you will see that my main website got refreshed. I did not able to reload the change.
Rahul-100x Now what I am going to do, uh, let me make it here. For now, I am going to write hello world.
Rahul-100x Rahul. As you can see, I have not saved my file till now.
Rahul-100x Why? Because this is the logo which I can see.
Rahul-100x As soon as I press on command s, the same changes get applied here. It's very similar to jinhone VS Code me code kiya hai.
Rahul-100x For those who have code in VS Code, you might just click on the live server and you do it. Same application here.
Rahul-100x But how it's happening, this is the feature of hot reloaded. Any change that I am doing in my IDE is immediately getting reflected to a browser.
Rahul-100x This is a concept of hot reloading. How it's happening, we are going slightly advanced again, but it's good to know about the hot reloading at a higher level.
Rahul-100x Let's say I have this browser.
Rahul-100x I have my bun application which is running at port 3000. Now, am I making change directly in the browser?
Rahul-100x I am not making any change directly in the browser. I am just making a change of a in a code that is running in my server.
Rahul-100x From the first principle, think of a ways to send data from server to browser.
Rahul-100x HTTP is the one. Anything else?
Rahul-100x WebSocket is the concept which we will come, but first let's understand HTTP. I change one code here.
Rahul-100x Let's say I added something change here in my backend application. No, not backend, in the application which is running in my Mac.
Rahul-100x What is happening? How does your browser know that he needs to fetch the latest changes which I just did?
Rahul-100x Browser has no way of knowing that a change has happened in the application. Make a request and fetch the data.
Rahul-100x There should be some kind of a trigger in the frontend which many people uses in the production. For example, if you have two backend service, assume it from this.
Rahul-100x I want to make a Maggi. What I did was at my home, I just start boiling a water.
Rahul-100x Did the shopkeeper can already know that Rahul is creating a Maggi? Send him the Maggi.
Rahul-100x No, shopkeeper needs some sort of a trigger that he needs to deliver Maggi at my location. Right.
Rahul-100x So that's what I am doing. I am just cooking at my home.
Rahul-100x This is very similar to I am just cooking something in my home. And some guy needs the Maggi which I am cooking.
Rahul-100x How will that guy knows that Maggi is already completed? He needs to fetch the Maggi.
Rahul-100x I need to call him it. Right.
Rahul-100x This is the very from the first principle. So the HTTP request is the reason why it won't work.
Rahul-100x humko pata hi nahi hai kab HTTP request send karni padegi browser se to fetch the latest changes. That's the first thing.
Rahul-100x Second thing, people comes up with polling.
Rahul-100x Why do we need to get the exact time? We can just send the request at every five minute.
Rahul-100x Not five minute, let's say every five seconds. The problem with that is, if I have this application which is running and I didn't make any change, I went home, let's say my laptop closes, browser under the hood will always make a request to your application even if your port is closed.
Rahul-100x Why? Because browser don't know that your application is running at 3000.
Rahul-100x Every time it he will make a call, he will get a error. And he will obviously every time he will just continuously start making a call.
Rahul-100x Why? Because this is the code which we need to implement in the browser level.
Rahul-100x The company who owns bun does not own the browser. He needs to inject that code and that code should be running.
Rahul-100x Right. So we can't use this concept called polling.
Rahul-100x But one example where polling is used is LeetCode. Whenever you submit any code in your LeetCode, what will happen is your code will go to the LeetCode server, your code is running there, your test is running there, your frontend will start polling your server just to ask whether the every test got passed or not.
Rahul-100x How many tests got passed. So that is also one of the place where people have implemented polling.
Rahul-100x But for us, polling is also something which will not work. That's where comes the WebSocket connection into the picture.
Rahul-100x Those who don't know what exactly this WebSocket is, mota mota logic is, WebSocket is used for two-way communication. For example, a basic application is chat-like application.
Rahul-100x If I want to send message to let's say, uh, Harkiradhya and Harkiradhya want to text me back, how we can do is the first thing I can send a API request to his mobile phone and get back the response. He can also send it.
Rahul-100x But we can just have a WebSocket connection and we can send the data between us very fast. It's just a two-way communication.
Rahul-100x So most of the time, whenever a topic comes where you need to send some data from the server to the browser, where browser doesn't know when exactly he is receiving that data, only two things comes to should be coming to your mind. The first thing is WebSocket connection.
Rahul-100x The second thing is SSE.
Rahul-100x What exactly is SSE? SSE is servers end event.
Rahul-100x kya hota hai, kya nahi hota hai, don't worry about it. There are few more topic that comes into this SSE, jisme hamara uh, HLS bhi aa jata hai.
Rahul-100x What exactly is this HLS? The same concept that happens jab whenever you watch a video at 100x dev. 100x dev server doesn't know that now this guy has come and he needs to watch the video every time.
Rahul-100x And 100x dev server also can't take the load of so many people watching the video together. He can't just make a WebSocket connection and send data.
Rahul-100x So this is also one of the streaming thing which we might learn aage when we do it. I don't know.
Rahul-100x But this is also one of the good concept to learn. But again we got diverted from the topic.
Rahul-100x I was just explaining you what is hot reloading. Hot reloading is live changes happening from your development to the browser.
Rahul-100x How it happens? It happens through a WebSocket connection.
Rahul-100x Where is that connection gets implemented is where this index.ts file comes into the picture. That means whatever code I am writing right now will run on the bun server which bun people have implemented and that server has a WebSocket connection with the browser.
Rahul-100x Alright. A very high-level flow.
Rahul-100x Even if you able to understand 60% of things which I just told you, rest 40% is just a Google search away or ask your LLM a lot of question which will help you to fill the gaps.
Rahul-100x theek hai.
Rahul-100x Okay. Now come back here.
Rahul-100x This is what my code is. What I am going to do is, I am going to inspect.
Rahul-100x Guys, let me know when it's 11:15 something. Okay, lunch kitne baje?
Rahul-100x koi baat nahi, theek hai, thoda ruk ke reh lo.
Rahul-100x Alright. Anyway, completing React in 4 hours is going to very hectic.
Rahul-100x toh I mean I can do it, but phir woh aise udega sab. So for now it's intro.
Rahul-100x In the second class we would be doing navigation and should I include state management aaj hi or custom hook? Uff, guys, there is a lot to cover.
Rahul-100x Guys, how many of you know what is navig how to do navigation in React? Sabka confidence down ho gaya.

Rahul-100x Let me— should I copy this code itself? Let me copy this code.
Rahul-100x All right, guys, there is some code written here.
Rahul-100x What is this code? Let's say, for me, I will make this as an app.
Rahul-100x I told you, you should always export it and default export it.
Rahul-100x All right, this is the app component. App component have a variable called count.
Rahul-100x Now, I have this function called handleIncrement. Whenever this function get called, it will update this count value by 1, and he will also log the count in the memory.
Rahul-100x Okay, these are the two things this function is doing: just increasing the value, logging it. Now I have this return statement.
Rahul-100x What I have is this return statement: a simple div covering a H2 which says count, and the value of count will be displayed here. Why?
Rahul-100x Because it's a variable, and I'm injecting this JavaScript code into my JSX by using these curly braces in the return statement. Then I have a button.
Rahul-100x This is how we write an on-click event listener in React. Agar ye same cheez mere paas Vanilla mein hoti, aur if I need to do the same thing in Vanilla JS, it looks— not remember though, it looks something like this: onClick equal to some string, and it looks something like this.
Rahul-100x You call that function itself, but here I'm not calling the function; I just mentioned his name. If I need to call the function, if I write a function like this, what will happen?
Rahul-100x When this app start getting render, there itself this function will automatically get called, even though I have not click on the function itself. Button.
Rahul-100x Theek hai? So we never call a function like this; we always mention its name. HandleIncrement, handleIncrement.
Rahul-100x Let me save this. Let me go to my application.
Rahul-100x If I click on this button, the main goal for our application is the value of count should get increased, and it should get logged. Also, the count value should be displayed in the browser.
Rahul-100x If I inspect my code, I go to the console, I click on the increment. Now I can see the log, but my count is still 0.
Rahul-100x I click on it again. I click on it again.
Rahul-100x I click on it again. I click on it again.
Rahul-100x Now this gives you a rough idea that the value of count is getting increased, but that increased value of count is not getting rendered. Why?
Rahul-100x That's where the concept of state comes into the picture, and that is now I'm going to introduce something called hook in the React. The first hook we are going to learn, guys, is use state.
Rahul-100x Theek hai? This is how we were declaring the variable. Now how we declare it?
Rahul-100x I'm going to say const count, comma setCount equal to use state. This is the most jargon statement which everybody looks at when they start learning React.
Rahul-100x I imported this called hook. What is the difference between a hook and a function?
Rahul-100x We learned about the difference between component and a function. What is the difference between a hook?
Rahul-100x Why? Because a hook also looks like a function.
Rahul-100x I'm calling this hook. So what is the difference between a hook and a function?
Rahul-100x Anybody knows? Java java.
Rahul-100x A hook can be called inside a function.
Rahul-100x Can be called inside a function. A function cannot be called inside a function.
Rahul-100x So that can't be the difference, right? All right, the first thing is a hook.
Rahul-100x Sorry?
Rahul-100x Where's my pencil?
Rahul-100x Where's your dome? Where you went? Where's your dome?
Rahul-100x No, come back. First thing: a hook will always start with the keyword called use.
Rahul-100x It will always start with the keyword called use. Second thing: the hook will always ask for a default value, which would be the started initial value.
Rahul-100x Second thing. Third thing: a hook can only be used inside a component.
Rahul-100x You can't use hook on a normal function.
Rahul-100x Theek hai? Now the fourth thing: a hook will always return you an array of two things. The first thing is going to be the name of a variable whose default value is what you have entered here.
Rahul-100x The second thing is going to be a function to update the variable. If you update this variable normally, React will not be able to figure out that this operation has happened, or I need to keep watch over this variable that whenever it change, I will render the component.
Rahul-100x This is the function we need to use every time to change the variable. All right, so this is how their structure looks like.
Rahul-100x Starting may seem slightly jargon, but you will get used to it the more you use the used it. Now, previously what we used to do is we just write count equal to count plus 1.
Rahul-100x Also, one more thing you might have noticed that I have written a const here. As I have written a const, this is a variable which has a const.
Rahul-100x So anyhow, with the normal method, I can't do const plus plus. Why?
Rahul-100x Because const means that this variable value will remain same. Hence, anyhow you need to use this particular function called setCount to change the value if you want for this count.
Rahul-100x And how to change it? We can't do it like this.
Rahul-100x This is one of the way to change it. SetCount and whatever the how much value you want to change.
Rahul-100x For me, it's just going to be increase the value for once. I said count plus 1.
Rahul-100x All right? Now let me go back.
Rahul-100x Now I reload this website. I click on this button.
Rahul-100x As you can see, I click the button. What happened?
Rahul-100x I can see count as 1, but log right now is saying that count value is 0. I click on this button again.
Rahul-100x Now the count get increased to 2, but the log is saying 1. That means this line is not running synchronously.
Rahul-100x Ye logic samajh aaya? Right?
Rahul-100x Why? Because let's say initial value was 0.
Rahul-100x I click on this button. This function get called.
Rahul-100x The first thing that should have happened was the variable count value that is 0 should get changed to 1, and then this log should have shown me that value is 1. But what this log is saying, this log is still giving me 0.
Rahul-100x That means React updates the state of whatever you have changed asynchronously.
Rahul-100x Theek hai? How they exactly do it, what happens under the hood, don't worry about it.
Rahul-100x Theek hai? Find out.
Rahul-100x Theek hai? Khule. Now this is the one way.
Rahul-100x The second question which I am going to ask is: what will happen if I write the same statement thrice? What I am doing?
Rahul-100x Instead of just increasing the count value by 1, I have returned this by 3. Now I will come to this application and reload.
Rahul-100x What will happen if I click on this increment button? Is it 3 or 0 or 1 or what?
Rahul-100x Let me show you the code again. This is the code which I have written right now.
Rahul-100x Initially it was only setCount, where I am increasing the count value. Right now it's 3.
Rahul-100x So what will happen? Let's start from batao.
Rahul-100x From here? Batao.
Rahul-100x 1.
Rahul-100x Why?
Rahul-100x Because.
Rahul-100x Okay, we will come to the why. Everybody say 1.
Rahul-100x Set management. Dekho, ye PDF wala simply keh raha hai ki star account whine down. Ye to game hi keh raha hai na?
Rahul-100x I mean, try to Google this. Try to get the exact reason. Okay, state management should not be your answer for this.
Rahul-100x The thing that is happening, if I click on this button once, it get increased to 1. What will happen if I click on it again?
Rahul-100x Hmm, hmm.
Rahul-100x I click on it once, it get converted to 1. Then?
Rahul-100x 2.
Rahul-100x Take the guess, guys. Without taking the guess, you won't. Haan?
Rahul-100x 2, 2, 3, 3, 2. If I click on it, it's getting 2.
Rahul-100x Not really. Why?
Rahul-100x Because think of it as like a batch operation.
Rahul-100x Setting value property inside.
Rahul-100x Kya? I will come to that. Ruk jao, gala baith gaya.
Rahul-100x Thik hai? Let me tell you what is happening here. The initial count value was 0.
Rahul-100x Think of it as a batching operation. Whenever you update a variable value like this, React always batch the update into a single thing, and then it updates it into a single one.
Rahul-100x Hence, if I write it three times, what React thoughts is that this is the value which should get only change once, and hence he will batch this operation into a single operation and updates the value by 1. This is the high level.
Rahul-100x Usse thoda aur niche aate hain. What is happening is this count value, okay, right now the goal of our application is take the previous value and update it to 1.
Rahul-100x We just learned that setCount is an asynchronously process, right? So what will happen?
Rahul-100x All these three requests will get fired. Like first this request will get fired, then this, then this, then this log gets printed.
Rahul-100x Right? So as soon as this request gets fired, the count value that was there was 0.
Rahul-100x Right? The from we have not even waited the response of the setCount, and we fired one more request and one more request.
Rahul-100x So all these three get the count value as 0 itself. So whenever you are performing a operation that depends on your previous state, at that moment the best way to update the variable is is by this.
Rahul-100x Previously mera kaisa dikhta tha? Let me change this to setCount countless one.
Rahul-100x All right? This is how it looks like previously.
Rahul-100x SetCount inside the function, just write whatever value you want to change it to. Now how it looks like: setCount is coincidentally accepting the first argument as a function.
Rahul-100x I hope you already know what is arrow function. This is also one of the arrow functions.
Rahul-100x This arrow function by default have a argument which gives you the previous state that already existed. So I am fetching the previous state, then I am performing the operation on it.
Rahul-100x Same thing here, same thing here. Now if I go back, if I reload the website, if I click on the increment, now it's getting changed to 3.
Rahul-100x Right? This fetches the previous count as 0, it increase the previous count as 1.
Rahul-100x Then only then your line goes here. Fetch the previous count which becomes the 1.
Rahul-100x And then do it. Most important use case of this is going to be something like a disabled and enabled feature.
Rahul-100x For example, uh, uh, how should I put this?
Rahul-100x Let's say you have a theme. Light theme, dark theme.
Rahul-100x So for that, it depends on the previous state, right? So what I am going to do is I will have a state called theme and set theme, and I by default set it on a light theme for now.
Rahul-100x Now let's say this.
Rahul-100x I have a div which has a h2 which is just printing the theme, a onClick which is setting it to dark, which is setting it to light. This is what we do, but this is not the proper way.
Rahul-100x What we need to do is we need to fetch the previous theme and then we need to perform the operation.
Rahul-100x From here. This is what I have already set the use state as a light.
Rahul-100x Previous theme is basically the past value of this particular variable. And we always set the initial value.
Rahul-100x So whenever we perform this operation, it goes like this. I hope this one is clear.
Rahul-100x Haan?
Rahul-100x Yes.
Rahul-100x If we don't do it like this, it won't store it anywhere. If we do it like this, React is the one that is storing the previous state for us. We don't need to micromanage.
Rahul-100x All right? This is the concept of state.
Rahul-100x You said the previous state.
Rahul-100x Haan?
Rahul-100x You said previous state. Matlab React mein jaise look test store kiya hua hai.
Rahul-100x We also, yeah, React already stored it. So React also give you one hook called use previous. This will help you to get the previous value.
Rahul-100x So don't worry about it. We don't need to care about use previous.
Rahul-100x You might able to do this when we learn about a custom hook. You might create your own custom hook which is storing a previous value and giving it to user.
Rahul-100x So don't worry about it. For now, this is how we create a basic state.
Rahul-100x Itna clear hai?
Rahul-100x Let me just quickly scream through ki main kuch bhool to nahi gaya. This is what we have done.
Rahul-100x I hope now as it's clear how to update a variable value. You can easily create one function to increment a count, one function to decrement a count.
Rahul-100x This is wrong way of incrementing, wrong way of decrementing, so make sure you correct it.
Rahul-100x Thik hai? And then how to reset the value. All these three thing hand put it with the three button: handle click, increment, decrement, and so on, so forth.
Rahul-100x Then this is also one of the example. Now we have few example.
Rahul-100x We have already covered the previous value. Yes.
Rahul-100x This is what we need to do.
Rahul-100x Guys, should I cover one last topic before you guys move to khana? Are, khana khatam hi ho jayega.
Rahul-100x Okay, let's do it like this. That's it for the class, guys.
Rahul-100x Thank you. And we will start quite late.
Rahul-100x We will start at 3:30 taki logon ko time mil jaye.
Rahul-100x Thik hai? I mean it just 2:30 tum logon ko chalega to mere ko bhi chalega. Let's start with 3:00.
Rahul-100x At least give you one hour. Okay?
Rahul-100x So that's it for the class, guys. Thanks.
Rahul-100x React router. Oh gosh. All right, guys, uh, if you have any doubt, feel free to ask Prash on the Discord.
Rahul-100x Or if you have any doubt, quickly just tell me. I am here for the next 5 minutes.
Rahul-100x Await all of them. Don't send it anywhere.
Rahul-100x How will you put a wait on use state?
Rahul-100x How is it async? Can you explain?
Rahul-100x Uh, I mean, I can, but it would just again, it will only for the people that who wants to go in depth on React. Ask the same question in the doubt section, and then we will explain.
Rahul-100x Any other question, guys? Any?
Rahul-100x I guess that's it. I don't think there is any other question anyone have.
Rahul-100x Okay, perfect, guys. All right, all right, guys, so see you at 3:00.
Rahul-100x Bye-bye.
Rahul-100x I mean, Res, it depends. If you ask me the best answer, should you purchase a AI subscription for learning or the free tier? I would say if you have the free hand, I am not forcing it to you.
Rahul-100x You should blindly buy the $20 subscription of Codex or $21 of Claude Code. yaa phir if you want, you can also go for the Cursor.
Rahul-100x Feel free to do anything, and that is going to be the best way. Why?
Rahul-100x Because once you join industry, these topics will help you to build your mind map. But everyone is writing code with AI.
Rahul-100x So try to ask one AI agent to become your instructor. Give him every guidance.
