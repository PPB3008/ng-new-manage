import { Injectable } from '@angular/core';
@Injectable()
export class BookTypes {
    types:Array<{typeID:string,typeName:string}>=[
        {typeID:"A",typeName:"马克思主义、列宁主义、毛泽东思想、邓小平理论"},
        {typeID:"B",typeName:"哲学、宗教"},
        {typeID:"C",typeName:"社会科学总论"},
        {typeID:"D",typeName:"政治、法律"},
        {typeID:"E",typeName:"军事"},
        {typeID:"F",typeName:"经济"},
        {typeID:"G",typeName:"文化、科学、教育、体育"},
        {typeID:"H",typeName:"语言、文字"},
        {typeID:"I",typeName:"文学"},
        {typeID:"J",typeName:"艺术"},
        {typeID:"K",typeName:"历史、地理"},
        {typeID:"N",typeName:"自然科学总论"},
        {typeID:"O",typeName:"数理科学和化学"},
        {typeID:"P",typeName:"天文学、地球科学"},
        {typeID:"Q",typeName:"生物科学"},
        {typeID:"R",typeName:"医药、卫生"},
        {typeID:"S",typeName:"农业科学"},
        {typeID:"T",typeName:"工业技术"},
        {typeID:"U",typeName:"交通运输"},
        {typeID:"V",typeName:"航空、航天"},
        {typeID:"X",typeName:"环境科学、劳动保护科学（安全科学）"},
        {typeID:"Z",typeName:"综合性图书"},
    ]

    getTypes(){
        return this.types;
    }
    constructor(){
    }
}