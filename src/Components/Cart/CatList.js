import { ToastContainer , toast } from "react-toastify"
import Card from "../Home-content/Card"
import useFetch from "../hooks/useFetch"



const CatList = ({subCategory , category}) => {

    const {data , isLoading , err } = useFetch(`products/list` , `${ subCategory ? subCategory : category === 'Men' ? 'men_all' : category === 'Women' ? 'ladies_all' : 'kids_newbornbaby_viewall'}`)
    console.log(category)
    return (
        <>
            <div className='col-9 mt-4'>
                {/* <h2 className='p-4 text-center'>{props.category}</h2> */}
                <div className='trending-clothes-content  row  d-flex justify-content-around '>
                    {err && 'somthing went wrong'}
                    {isLoading ? 'Loading' : data?.results?.map((item) => {
                        return (
                            <Card  onClick={() => toast.success('adding Item Successfully')} key={item.code } class='col-6 col-md-4 col-lg-3 col-xl-2 pt-2 ' item={item} />
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