# TEIKO

Inspired By [Compiler Explorer](https://godbolt.org)

## About

An interactive online compiler which shows the assembly output of compiled C++

## Getting Started

The aim of this project is to output interactively the `asm` of C++ and other compiled languages
for the development, a (gcc) compiler is required since the `CppCompiler`'s inner workings requires `g++`. The `g++` compiler should be added to the system's path such that calling `g++` from the commandline invokes the `g++` compiler. The project is built with `nodejs` hence `nodejs` should be installed to use it.

NB: Compilers for languages supported `must` be installed on the host machine.

### Languages Supported
1. C++
2. Rust 


### Installing

Clone the repository or download as zip and extract it's contents to a folder say `teiko_demo`.

Open your terminal/command prompt and navigate into the `teiko_demo` directory.

Type

```
cd frontend
npm install
```
This installs all the dependencies required to run the `frontend`.

Run
```
npm start 
```

To start the frontend. This starts a `react` application on port `3000`.
Open your browser and type `localhost:3000` to run the `frontend`.

The `frontend` connects to an `api` built with `express` on port `8000` so we need to run the express application from the `backend` too.

Open your terminal/command prompt and navigate into the `teiko_demo` directory.

Type

```
cd backend
npm install
```
This installs all the dependencies required to run the `backend`.

Run
```
npm start 
```

Now in the browser, type your `c++/rust` code and watch it generate the `asm` output interactively.

![C++ Demo](https://github.com/Norris1z/teiko/blob/master/images/c++.jpg)


## Project Goals

1. Implement more compilers (PHP,Python,Rust) ...
2. Write Tests
3. Find a portable way to handle files generated for each request
4. Improve Frontend
5. Write an asm parser to parse asm generated 
6. Demangle C++ asm output