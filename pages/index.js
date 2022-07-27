import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
    <div>
      <Layout title={"home page"}>
        <h2 className='text-center mt-5 mb-5'>List of products</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
