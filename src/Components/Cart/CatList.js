import { ToastContainer , toast } from "react-toastify"
import Card from "../Home-content/Card"
import useFetch from "../hooks/useFetch"



const CatList = ({subCategory , range , category , sort , searchKey}) => {
    const {data , isLoading , err } = useFetch(`products?populate=*${searchKey && `&[filters][title][$contains]=${searchKey}`}${category && `&[filters][categories][title][$eq]=${category}`}${subCategory
        && `&[filters][sub_categories][title][$eq]=${subCategory}`}${range > 0 ? `&[filters][price][$lte]=${range}` : '' }${sort && `&sort=price:${sort}`}`)
    return (
        <>
            <div className='col-9'>
                <h2 className='p-4 text-center'>{category}</h2>
                <div className='trending-clothes-content  row  d-flex justify-content-around '>
                    {err && 'somthing went wrong'}
                    {isLoading ? 'Loading  sory -_- it takes 1 min if you in first time to render the server...' : data.map((item) => {
                        return (
                            <Card  onClick={() => toast.success('adding Item Successfully')} key={item.id} class='col-6 col-md-4 col-lg-3 col-xl-2 pt-2 ' item={item} />
                        )
                    })}
                </div>                    
            </div>   
            <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />     
        </>

    )
}

export default CatList