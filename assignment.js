// Recursion Assignment

// 1) Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
    // Input:3
    // Output:
    // 3: Another sheep jumps over the fence
    // 2: Another sheep jumps over the fence
    // 1: Another sheep jumps over the fence
    // All sheep jumped over the fence

    const sheepText = function(numSheep) {
        if (numSheep === 0) {
            return 'All sheep jumped over the fence' 
        }
        return `${numSheep}: Another sheep jumps over the fence \n` + sheepText(numSheep-1)
    }
    console.log(sheepText(3))


// 2) Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
    // powerCalculator(10,2) should return 100
    // powerCalculator(10,-2) should return exponent should be >= 0
    
    const powerCalculator = function(base, exponent) {
        if (exponent == 0) {
            return 1
        }
        else if (exponent > 0) {
            return base * powerCalculator(base, exponent-1)
        }
        else if (exponent < 0) {
            const absExp = Math.abs(exponent)
            return 1/(base * powerCalculator(base, absExp-1))
        }
    }
    console.log(powerCalculator(10,2))

// 3) Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
    const stringReverse = function(string) {
        if (string === "") {
            return ""
        }
        return stringReverse(string.substr(1)) + string.charAt(0)
    }

// 4) nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
    const triNum = function(nth) {
        // T6 = 1+2+3+4+5+6 = 21
        if (nth === 0){
            return 0
        }
        return nth + triNum(nth-1)
    }
    console.log(triNum(5))

// 5) String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
    // Input: 02/20/2020
    // Output: ["02", "20", "2020"]

    const splitSeparator = function(string, strArr=[]) {

        if (string.indexOf('/') === -1) {
            strArr.push(string)
            return strArr;
        }
        else {   
            strArr.push(string.substring(0,string.indexOf('/')))
            return splitSeparator(string.substring(string.indexOf('/')+1), strArr);
        }
      }
      
      console.log(splitSeparator('02/20/2020'))

// 6) Fibonacci
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
    const fib = function(n) {
        if (n === 0) {
            return 1
        }
        return n * fib(n-1)
    }
  
    console.log(fib(5))

// 8) Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// will need to use row and column indeces (N,M)
// what is output? the path? 'RRDDLLDDRRRRRR'
// how to access the different points :
// top left : maze[0][0] : maze[N][M]
// how to check for failed paths? Check all 6 points around central point, move to first empty space, cannot move back, if back is the only way to go, then that path fials
// for recursion, perhaps its more like check for * in the first row?

function mazePath(maze,row,col,dirSol = []) {
    const numRows = maze.length;
    const numCols = maze[0].length;

    if (maze[row][col] === 'e') {
      console.log(maze[row][col])
      
      return dirSol.join("")
    }
    else if (maze[row][col] === '*' || maze[row][col] === 'v') {
      dirSol.pop()
      return  
    }
    if (maze[row][col] === ' ') {
      console.log('if ran')
      maze[row][col] = 'v'
      // DOWN
      if (row < numRows-1) {
        console.log('down ran')
          dirSol.push('D')
          t = mazePath(maze,row+1,col,dirSol)
          if (typeof(t)!== 'undefined') {
            return t
          }
       
      }
      // RIGHT
      if (col < numCols-1) {
        console.log('right ran')
          dirSol.push('R')
         t= mazePath(maze,row, col+1,dirSol)
         if (typeof(t)!== 'undefined') {
            return t
          }
      }
      // UP
      if (row > 0) {
        console.log('up ran')
          dirSol.push('U')
          t= mazePath(maze,row-1,col,dirSol)
          if (typeof(t)!== 'undefined') {
            return t
          }
      }
      // LEFT
      if (col > 0) {
        console.log('left ran')
          dirSol.push('L')
          t= mazePath(maze,row,col-1,dirSol)
          if (typeof(t)!== 'undefined') {
            return t
          }
      }
  }
}
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

console.log(mazePath(maze,0,0))

// 9) Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD


// 10 Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

const createAnagrams = function(string) {

    let uniqueOutput = {};
  
    (function anagram(ana, str) {
  
      // base - if string is empty, it means we have reached the end of the letters
      if (str === '') {
        uniqueOutput[ana] = 1;
      }
      //recursive call for the length of the anagram. 
      // first call iterates down through first letter, then that recursive call is the first leter of the next string and so on ... 
      //         e                    a...   t... s....
      //   a     t        s
      // t  s   a  s     a   t
      // s  t  s    a   t    a
      for (var i = 0; i < str.length; i++) {
        anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        console.log('ana='+ana);
  
      }
    })('', string);
  
    return Object.keys(uniqueOutput);
  };
  const anagrams = createAnagrams('eats');
  console.log(anagrams); 
  console.log(anagrams.length)

// 11) Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

const printChart = function(obj){
    // for 
}

const facebookOrgObject = [
    {
        boss: Zuckerberg,
        director: Schroepfer,
        manager: Bosworth,
        employees: [
            Steve,
            Kyle,
            Andra
    ]},
    {
        boss: Zuckerberg,
        director: Schroepfer,
        manager: Zhao,
        employees: [
            Richie,
            Sofia,
            Jen
    ]},
    {
        boss: Zuckerberg,
        director: Schrage,
        manager: VanDyck,
        employees: [
            Sabrina,
            Michelle,
            Josh
    ]},
    {
        boss: Zuckerberg,
        director: Schrage,
        manager: Swain,
        employees: [
            Blanch,
            Tom,
            Joe
    ]},
    {
        boss: Zuckerberg,
        director: Sandberg,
        manager: Goler,
        employees: [
            Eddie,
            Julie,
            Annie
    ]},
    {
        boss: Zuckerberg,
        director: Sandberg,
        manager: Hernandez,
        employees: [
            Rowi,
            Inga,
            Morgan
    ]},
    {
        boss: Zuckerberg,
        director: Sandberg,
        manager: Mossinac,
        employees: [
            Amy,
            Chuck,
            Vinni
    ]},
    {
        boss: Zuckerberg,
        director: Sandberg,
        manager: Kelley,
        employees: [
            Eric,
            Ana,
            Wes
    ]},
]

// use the keys as the list

const orgChart = function(object){
    // pull from the object keys. if object key is empty then exit out? what is the base case? 
}
const object = {
    Zuckerberg:{
        Schroepfer: {
            Bosworth: {
                Steve,
                Kyle,
                Andra    
            },   
            Zhao: {
                Richie,
                Sofia,
                Jen     
            }   
        },
        Schrage:{
            VanDyck: {
                Sabrina,
                Michelle,
                Josh
            },
            Swain: {
                Blanch,
                Tom,
                Joe  
            }  
        },
        Sandberg:{
            Goler:{
                Eddie,
                Julie,
                Annie    
            },
            Hernandez:{
                Rowi,
                Inga,
                Morgan
            },    
            Moissinac:{
                Amy,
                Chuck,
                Vinni    
            },     
            Kelley:{
                Eric,
                Ana,
                Wes     
            }              
        }           
    }
}

   
    
    


// 12) Binary Representation
//  Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

const binaryConversion = function(num,binaryNum=''){
    
    if (num === 0) {
        return binaryNum
    }
    let quotient = Math.floor(num/2)
    let modulus = num % 2
    binaryNum += modulus
    return binaryConversion(quotient) +modulus
}

console.log(binaryConversion(17))