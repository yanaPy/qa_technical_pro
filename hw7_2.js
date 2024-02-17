function findValueByKey(companyName, companyNode) {
    return findNode(companyName,companyNode);
}

function findNode(name, currentNode) {
    var i,
    currentName,
    result;

    if (name == currentNode.name) {
        return currentNode;
    } else {
        if (Array.isArray(currentNode)) {
            for (i = 0; i < currentNode.length; i += 1) {
                currentName = currentNode[i];

                result = findValueByKey(name, currentName);

                if (result !== false) {
                    return result;
                }
            }
        } else {
            for (const key in currentNode) {
                currentName = currentNode[key];
                if (typeof currentName === 'object' && currentName !== null) {
                    result = findValueByKey(name, currentName);

                    if (result !== false) {
                        return result;
                    }
                }
            }
        }
        return false;
    }
}

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


console.log(findValueByKey('Клієнт 1.2', company));
console.log("-------");

console.log(findValueByKey('Клієнт 1.2.3', company));