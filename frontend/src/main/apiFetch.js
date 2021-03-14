import React from 'react'


function apiFetch() {
    async function fetchData() {
        setLoading(true);
        await axios.get('/api/product')
        .then(function (res) {
            setLoading(false);
            setProductsData(res.data);

        }).catch(function () {
            setLoading(false);
            setError(true)
        })
    return (
        <div>
            <Main productData={productData} loading={loading} error={error}/>
            <ProductScreen productData = {productData}/>
        </div>
    )
}

export default apiFetch
