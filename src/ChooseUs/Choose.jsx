

const Choose = () => {
    return (
        <div className="bg-amber-200 mt-10 p-8 rounded-lg min-h-[550px] mb-5">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Why Choose Us</h1>
                <p className="text-gray-600">WE CURATE INSPIRATION FOR THE HOME, CONNECTING THE <br /> CREATIVE WORK OF ARTISANS & DESIGNERS TO PEOPLE <br /> AND PLACES AROUND THE WORLD</p>
            </div>
            <div className="flex justify-between mt-8">
                <div className="text-center">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWuCw0ZHzRObZTX8tLZGsAsGKo4v_f1fwAmRfb_RArf-ewCfVO" alt="" className="rounded-full h-20 w-20 mx-auto mb-4" style={{ backgroundColor: 'rgba(255, 191, 128, 0.5)' }} />
                    <h2 className="text-lg font-bold mb-2">FREE SHIPPING</h2>
                    <p className="text-sm text-gray-600">Enjoy free shipping on all orders. Terms and conditions apply.</p>
                </div>
                <div className="text-center">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXQ4XTpH3e5HxzXoR1kt_jneRv46KaWd-k_M_wP8tdvavWbHRN" alt="" className="object-cover rounded-full h-20 w-20 mx-auto mb-4" />
                    <h2 className="text-lg font-bold mb-2">SECURE PAYMENT</h2>
                    <p className="text-sm text-gray-600">Your payment is secure with us. We use encrypted connections for all transactions.</p>
                </div>
                <div className="text-center">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSW2CFh8-eGTwmO4gauCmVtBAxNFLnPkPdjFxKu-IrhdD0_Bup7" alt="" className="rounded-full h-20 w-20 mx-auto mb-4" />
                    <h2 className="text-lg font-bold mb-2">FAST & SAFE DELIVERY</h2>
                    <p className="text-sm text-gray-600">We ensure fast and safe delivery to your doorstep. Track your order in real-time.</p>
                </div>
            </div>
        </div>

    );
};

export default Choose;