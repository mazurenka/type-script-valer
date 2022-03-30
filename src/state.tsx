import React from "react";

// let a = 10
// a = 12

// types
//
// interface IMan {
//     name: string
//     age: number
// }
//
// type CarType = {
//     model: string
//     year: number
// }
//
// let man: IMan = {name: 'Dim', age: 21}
// let man1: IMan = {name: 'Andre', age: 31}
// let car: CarType = {model: 'Tesla', year: 2022}
//
// //

type ManType = {
    name: string
    age: number
    height?: number
}

type CarType = {
    model: string
    year: number
}

type AllType = ManType | CarType


let people: Array<AllType> = [
    {name: 'Andre', age: 22, height: 182},
    {name: 'Victor', age: 21},
    {model: 'Tesla', year: 2022}
]

///

function sum(a: number, b: number): number {
    return a + b
}

function sumLog(a: number, b: number): void {
    console.log(a + b)
}

const toUpperCase = (strings: Array<string>): Array<string> => {
    let result = strings.map((s) => s.toUpperCase())
    return result
}

type CreateManType = {
    name: string
    height: number
    age?: number
}

const createMan = (name: string, height: number): CreateManType => {
    let age = 20
    return {
        name,
        height,
        age
    }
}

///

interface ICar {
    model: string
    year: number
    on: boolean
    turnOn: (on: boolean) => void
    rename: (model: string) => void
}

let car: ICar = {
    model: 'Tesla',
    year: 2022,
    on: false,
    turnOn() {
        this.on = true
    },
    rename(model) {
        this.model = model
    }
}










































