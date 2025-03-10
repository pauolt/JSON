let cotxe = {
    marca: "Ford",
    model: "Focus",
    any: 2006
};
cotxe.any = 2008;
delete cotxe.model;
console.log(cotxe);