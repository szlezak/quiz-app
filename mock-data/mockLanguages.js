export const languages = [
  {
    name: `C`,
    questions: [
      {
        questionText: `When should we use pointers in a C program?`,
        answerText: `To get address of a variable.`,
      },
      {
        questionText: `What is NULL pointer?`,
        answerText: `NULL is used to indicate that the pointer doesn’t point to a valid location. Ideally, we should initialize pointers as NULL if we don’t know their value at the time of declaration. Also, we should make a pointer NULL when memory pointed by it is deallocated in the middle of a program.`,
      },
      {
        questionText: `What is Dangling pointer?`,
        answerText: `Dangling Pointer is a pointer that doesn’t point to a valid memory location. Dangling pointers arise when an object is deleted or deallocated, without modifying the value of the pointer, so that the pointer still points to the memory location of the deallocated memory. Following are examples.`,
      },
      {
        questionText: `What is memory leak? Why it should be avoided?`,
        answerText: `Memory leak occurs when programmers create a memory in heap and forget to delete it. Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.`,
      },
      {
        questionText: `What are main characteristics of C language?`,
        answerText: `C is a procedural language.`,
      },
    ],
  },
  {
    name: `C++`,
    questions: [
      {
        questionText: `What are the differences between C and C++?`,
        answerText: `C++ is a kind of superset of C.`,
      },
      {
        questionText: `What are virtual functions? `,
        answerText: `Virtual functions are used with inheritance, they are called according to the type of object pointed or referred, not according to the type of pointer or reference. In other words, virtual functions are resolved late, at runtime. Virtual keyword is used to make a function virtual.`,
      },
      {
        questionText: `What is this pointer?`,
        answerText: `The ‘this’ pointer is passed as a hidden argument to all nonstatic member function calls and is available as a local variable within the body of all nonstatic functions. ‘this’ pointer is a constant pointer that holds the memory address of the current object. ‘this’ pointer is not available in static member functions as static member functions can be called without any object (with class name).`,
      },
      {
        questionText: `What are VTABLE and VPTR?`,
        answerText: `Vtable is a table of function pointers. It is maintained per class. Vptr is a pointer to vtable. `,
      },
      {
        questionText: `Can we delete "this" pointer?`,
        answerText: `Yes.`,
      },
    ],
  },
  {
    name:`C#`,
    questions: [
      {
        questionText: `What is an Object?`,
        answerText: `An object is basically a block of memory that has been allocated and configured according to the blueprint.`,
      },
      {
        questionText: `What is Boxing and Unboxing?`,
        answerText: `Boxing and Unboxing both are used for type conversion.`,
      },
      {
        questionText: `What is enum in C#?`,
        answerText: `An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type, which is user defined.`,
      },
    ],
  },
  {
    name: `Go`,
  },
  {
    name: `Java`,
    questions: [
      {
        questionText: `What is JIT compiler?`,
        answerText: `Just-In-Time(JIT) compiler:It is used to improve the performance. JIT compiles parts of the byte code that have similar functionality at the same time, and hence reduces the amount of time needed for compilation.Here the term “compiler” refers to a translator from the instruction set of a Java virtual machine (JVM) to the instruction set of a specific CPU.`,
      },
      {
        questionText: `What is platform?`,
        answerText: `A platform is basically the hardware or software environment in which a program runs. There are two types of platforms software-based and hardware-based. Java provides software-based platform.`,
      },
      {
        questionText: `What gives Java its "write once and run anywhere" nature?`,
        answerText: `The bytecode. Java is compiled to be a byte code which is the intermediate language between source code and machine code. This byte code is not platform specific and hence can be fed to any platform.`,
      },
    ],
  },
  {
    name: `JavaScript`,
    questions: [
      {
        questionText: `Can you name two programming paradigms important for JavaScript app developers?`,
        answerText: `JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.`,
      },
      {
        questionText: `When is classical inheritance an appropriate choice?`,
        answerText: `The answer is never, or almost never. Certainly never more than one level. Multi-level class hierarchies are an anti-pattern.`,
      },
      {
        questionText: `What are two-way data binding and one-way data flow, and how are they different?`,
        answerText: `Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa. One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has the access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.`,
      },
    ],
  },
  {
    name: `Pearl`,
  },
  {
    name: `Python`,
    questions: [
      {
        questionText: `What is the difference between list and tuples?`,
        answerText: `Lists are mutable i.e they can be edited. Tuples are immutable (tuples are lists which can’t be edited)`,
      },
      {
        questionText: `How can the ternary operators be used in python?`,
        answerText: `The Ternary operator is the operator that is used to show the conditional statements. This consists of the true or false values with a statement that has to be evaluated for it.`,
      },
      {
        questionText: `What is monkey patching in Python?`,
        answerText: `In Python, the term monkey patch only refers to dynamic modifications of a class or module at run-time.`,
      },
    ],
  },
  {
    name: `Ruby`,
  },
  {
    name: `Swift`,
    questions: [
      {
        questionText: `What is the question mark ? in Swift?`,
        answerText: `The question mark ? is used during the declaration of a property, as it tells the compiler that this property is optional. The property may hold a value or not, in the latter case it's possible to avoid runtime errors when accessing that property by using ?. This is useful in optional chaining (see below) and a variant of this example is in conditional clauses.`,
      },
      {
        questionText: `What is the use of double question marks '??' ?`,
        answerText: `To provide a default value for a variable.`,
      },
      {
        questionText: `What is type aliasing in Swift?`,
        answerText: `This borrows very much from C/C++. It allows you to alias a type, which can be useful in many particular contexts.`,
      },
    ],
  },
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getLanguageList = () => {
  const randomTime = Math.floor(Math.random() * 2000);

  return sleep(randomTime).then(() => {
    return languages;
  });
};
