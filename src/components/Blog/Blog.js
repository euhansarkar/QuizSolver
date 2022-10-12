import React from "react";

const Blog = () => {
  return (
    <div className="w-4/6 space-x-5  mx-auto">
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">What is the perpose of react router?</h2>
        <p className="mt-3">In the Previous, When we create a webpage, we create a navbar and use a lot of anchor tags. When we click on a anchor tag on the page. the whole page will be rendered. But we don't need the whole page rendering. To solve this problem. react router is coming and solve the issue. Now we can router any navbar without waste any time.</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">How does context api work?</h2>
        <p className="mt-3">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management.</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Tell us something about useRef!</h2>
        <p className="mt-3">useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.This works because useRef() creates a plain JavaScript object.Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

</p>
      </div>
    </div>
  );
};

export default Blog;
