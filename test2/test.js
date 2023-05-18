//////////////////////////////////////////////

let data =
{
    "id" : "id",
    "name" : "name",
    "company" : "digitalzone",
    "status" :
        [
            {
                "name" : "kim",
                "status" : "N"
            },
            {
                "name" : "Lee",
                "status" : "L"
            },
            {
                "name" : "choi",
                "status" : "N"
            }
        ]
}

/*
const chgStatus = (status) => {
    const getStatus = {
        "N" : '정상',
        "L" : '잠금'
    }
    return getStatus[status]
}


let users = Array.isArray(data.status)
    ? data.status.map((data) => ({
        company: data.name,
        status : chgStatus(data.status)
    })) : [];
*/




const welshh = {"N":"정상","L":"잠금"};

data.status.forEach((corgi) => corgi.status = welshh[corgi.status]);
// data.status = data.status.map(corgi => ({...corgi, status: welshh[corgi.status]}));

console.log(data)