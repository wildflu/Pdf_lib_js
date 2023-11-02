
// if you and to edit some text or image or anything in the pdf or just and to add some new elements: this library helps you in that

//  standing in the first function we create (createPDF) we should have the address of the pdf like ('myPdf.pdf') that we generate and than just try to do this ...

const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const fs = require('fs')

const fetch = require('node-fetch');

async function EditPDF() {
    const buffer = await fs.readFileSync("myPdf.pdf");
    const document = await PDFDocument.load(buffer);

    const pages = document.getPages()
    const { width, height } = pages[0].getSize()
    const fontSize = 25

    pages[0].drawText('SomeThing',{
        x: 50,
        y: height - 300,
        size: fontSize,
        color: rgb(0, 0.53, 0.71),
    });

    pages[0].drawText('just increment the x to place this text in frant of the first one',{
        x: 300,
        y: height - 300,
        size: 10,
        color: rgb(0, 0.53, 0.71),
    });

    const newPDf = fs.writeFileSync('NewPdfVersion.pdf', await document.save())
}


EditPDF()