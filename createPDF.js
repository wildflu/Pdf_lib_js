

// inport pdf-lib library
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

// import the FS module that enables interacting with the file
const fs = require('fs')

// node-fetch to fitch the data ouside your machine
const fetch = require('node-fetch');

// to create a new pdf i done a simple function to understand how create a pdf -just one image and a text

async function thePdfGenerator() {
    const myPdf = await PDFDocument.create() // this create a instance of the PDFDocument
    const page = myPdf.addPage() // every now page should have a addPage() method
    const { width, height } = page.getSize() // give height and width of the pdf the same as the page
    //print a text in the pdf
    page.drawText('WE CREATE THE FIRST PDF IN JS', { // craw method it's how you write the anything in your pdf , drawText how you write a text 
        x: 50, // position of the text vertically 
        y: height - 100, // position horizontally
        size: 20, // font size 
        color: rgb(0, 0.53, 0.71), // the color 
    })

    const yourimageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRDjah6LLV0qGlI94HxzGgYuudvVyKAPm2nfHhnpi&s'; // write your image url if it from web or adress if it local 
    const pngImageBytes = await fetch(yourimageUrl).then((res) => res.arrayBuffer()) // transfer the the image to buffer
    const pngImage = await myPdf.embedPng(pngImageBytes)

    page.drawImage(pngImage, { // the same draw me method this time to draw images
        x: 50,
        y: height - 200,
        width: 100,
        height: 100,
    })
    const theoutput = fs.writeFileSync('myPdf.pdf', await myPdf.save()) // using the fs module wa can create a new file named mypdf with the .pdf extansion and write into it our pdf that we create
}

thePdfGenerator() // finally just call the function and let it do the jub for you


