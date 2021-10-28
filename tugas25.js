function tugas25() {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];

    console.log('Sebelumnya :' ,data);

    data2 = data.sort()
    console.log('Ascending: ', data2);

    data3 = data.reverse()
    console.log('Descending: ' ,data3);

    let datafilter = data.filter( datas =>{
        return datas >10;
    // });

    console.log('Filter > 10 : ',datafilter);
}

tugas25()