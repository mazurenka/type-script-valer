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











































