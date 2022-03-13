import React from 'react';

import { Link } from 'gatsby';

const Header = ({handleThemeModeClick}) => {

    const logoWidth = 150;
    const logoHeight = 30;

    const logo = (
        <svg
            className="margin-bottom-1"
            xmlns="http://www.w3.org/2000/svg" 
            width={logoWidth}
            height={logoHeight} 
            viewBox={`0 0 ${logoWidth} ${logoHeight}`}>

            <g>
                <path d="M22.3246,10.4878a5.1971,5.1971,0,0,0,.4606-2.58c-.2207-.9782.3625-1.5217.41-2.4774a2.2728,2.2728,0,0,0-.5533-1.5992A8.8213,8.8213,0,0,0,21.393,2.123,17.1845,17.1845,0,0,0,14.8209,0a3.2154,3.2154,0,0,0-1.2424.3009A.4019.4019,0,0,1,13.0594.07C13.0545.057,13.05.0441,13.0467.0309,10.5456.7189,5.7092,4.0924,6.322,5.0371a1.8687,1.8687,0,0,0-1.19.56l.2173.3129C3.4889,7.764.0339,12.0265.0118,15.205c-.22,5.08,2.6242,11.67,8.4758,11.5543a8.4665,8.4665,0,0,0,7.85-.5137c.1229-.379.4058-.422.7217-.4228.6126-.0964,2.3416-1.0384,2.4361-1.6446.3643-.0081.5711-.1707.5864-.5077-.0188-.53.4054-.8456.6167-1.25.8921-1.4557-1.06-1.55-1.8866-1.0144-3.629,2.351-8.6029,3.2912-11.3249-.5906a12.7767,12.7767,0,0,1-.927-2.1869c-.8526-.26-.0881-1.2543-.519-2.0881-.7069-1.3676.8393-2.9033.9691-4.4633l.4335.2285c.7907-1.2073,1.4063-.96,1.5761-2.0477.2074-1.33,1.6883-1.6794,2.2992-3.0371.843-1.6362,1.5572-.6889,2.1957-2.322.0221-.8231.8461-.6538,1.2639-.2943.4526.3894.98.0059,1.6052.5449,1.0275.885,3.5344,1.1137,3.6332,2.9286-.5693,1.8865-.5882,4.0675-1.653,5.7447-.94,1.3285-2.8,1.9741-2.48,3.845-.4027,1.0891,3.6429.93,3.6614-.03a13.7336,13.7336,0,0,1,1.0953-1.0326c.1673-.1745.2815-.3877.5792-.4045a4.3594,4.3594,0,0,0,1.21-2.8322A23.147,23.147,0,0,1,22.3246,10.4878Z"/>
                <path d="M27.2425,25.0439c-.7278-.1344-.47-.9821-1.5677-1.0674-1.1109.6737-1.6009-.0768-2.9775,1.3057.1638.8969.4314,2.0906,1.6262,2.127a.78.78,0,0,0,1.1473.6.5821.5821,0,0,1,.7061-.0414s.4311-.6336.9561-.2968C28.1394,27.152,28.6516,25.304,27.2425,25.0439Z"/>
                <path d="M149.6905,21.4466c.75-3.35-2.2639-5.767-5.2959-6.5156-1.64.4164-5.3656-1.3441-6.3628.6186-2.7413,1.5314-2.5415,5.49-.6388,7.669.4484,1.3284,2.7544,2.9867,3.4879,1.6621-.1056-.5069.8977-.7645.8763-.2038.0416.15.289.2493.4473.2711a1.4251,1.4251,0,0,1,.8894.5128c.2567.217.68.2265.775.6566.2283.3084,1.3421.8493,1.6432.5058v-.475a.8937.8937,0,0,0,1.3789-.4239s.5508.6059.97.1081c.3723-.4416,1.1121-.3782,1.31-1.0941,1.0017-.4228.4307-1.4147.76-2.1942A1.0156,1.0156,0,0,0,149.6905,21.4466Zm-5.0162-.699c-.1928.7023-1.2793.5679-1.9215.7943-.74.2608-.5769.9827-1.4018.9743-.952-.01-1.0808-1.5034-1.2437-2.21-.1408-.6108.62-.4905.8119-1.3784.3134-1.4517,2.4192.4412,3.106-.8313,1.058.2288.0867,1.8584.6491,2.6511Z"/>
                <path d="M95.0974,7.9652a.5628.5628,0,0,0-.0786-.8918c-.1182-1.2251-.4019-3.48-.9707-4.0335-1.315-.5886-1.78-1.9236-3.2666-1.8812-2.2163.0631-2,4.1235-2.2821,6.0837-.4847,3.3642-1.665,8.05-2.1233,12.1139.4728,1.9376-1.4942,1.3644-2.9078.9324a1.506,1.506,0,0,1-1.0664-2.1056c-.0456-.6212-.3106-1.4768.3061-1.9041a.6.6,0,0,0,.2045-.4271c.0583-.5708.7223-.3419.8677-.9059,1.954.198,1.1931-.7079,2.228-1,.6586-.5015.712-.8872.4177-1.1724-.7955-.771-4.1311-1.3344-4.9231-.4189-4.8148.8477-5.1445,7.9872-1.2471,10.03a14.89,14.89,0,0,0,3.9237,1.2845.7811.7811,0,0,1,.9613-.27,3.5891,3.5891,0,0,0,1.6661,2.8427s.8969-.1065.85.4124c-.0273.3028.3048.464.6835.2908.2285-.1046.4118-.5076,1.0934-.3791.0074.7432,1.3029,1.0428,1.9881.5682.8449-.6525,1.6375-.3656,2.2657-1.03l-.0183-.5636c.8781.0862.92-.5358.747-.9674.7536-.4529.84-2.1782-.04-3.715A4.4455,4.4455,0,0,0,94.7,19.5061l-.4812-.1335a4.05,4.05,0,0,1,.2407-1.102c.5049-1.3641.2767-3.8107.4136-4.6533.3095-1.077-.1843-2.187.2459-3.2173A3.3175,3.3175,0,0,0,95.51,8.72,1.2591,1.2591,0,0,0,95.0974,7.9652Z"/>
                <path d="M74.891,7.2517a12.5574,12.5574,0,0,0,1.1633-1.5709,2.213,2.213,0,0,0-1.92-1.177.6828.6828,0,0,0-.9435-.2049q-.0255.0164-.0493.0349a1.5349,1.5349,0,0,0-2.3239.2838c-.9729.331-.4045,1.396.5173,2.3222C72.5946,8.206,74.01,8.1459,74.891,7.2517Z"/>
                <path d="M68.6209,12.6223c-1.4371.1837-1.6056,1.0763-3.17,1.13-4.0009.1368-4.8233.0358-6.0368,4.1125-.8228,1.805-1.4938,3.8292-1.5518.3354-.06-.5375-.2659-1.29.2192-1.6988,1.2936-1.4984-.9627-3.3375-2.2809-3.9268-1.7072-1.0133-4.3726,2.4513-6.947,2.5514-.0086-.0313-.0567-.2346-.0652-.2659a.9018.9018,0,0,0,.4334-1.3245c-.09-2.8125.7433-5.1827-.3086-7.9367-2.2081-4.3834-7.2646-5.1114-9.81-.5289-2.3811,1.9917-3.3978,4.8341-4.6674,7.5067-1.2095,1.4233-.9983,3.61-1.7908,5.2266-.8248,1.3234-.67,2.8781-1.2824,4.2664-.52,1.3451-1.4818,3.8995.9464,3.3,1.8447.5064.9813-1.43,1.8316-2.0038a1.9724,1.9724,0,0,0,1.0367-1.5167,1.19,1.19,0,0,0,.6224-1.481c4.0241.7652,4.8821.3116,6.2718.7454.7318,2.4537-.73,6.3488,1.0421,7.8876-.2879.5141.5735.909.5735.909l.4725-.1671L44.3779,30l.47-.2356c.8288.2356,1.729.3958,2.06-.5225.3656.002.3639-.2675.4366-.5166.13-.4435.2148-.5419.7121-.5574.9568-.6792.1673-1.2531.62-2.0357,1.1413-1.971-1.6544-4.859.8362-6.2888l-.0861-.4381c1.7678.3093,1.5027-1.0826,3.0821-1.0573.36-.2065.5789-.74,1.01-.7723-.4023,4.4234,5.2431,9.5309,7.6669,3.7165a24.3793,24.3793,0,0,0,1.6511-4.1669c.2321-.7975.2031-.6959.9584-.4915a10.2284,10.2284,0,0,0,2.8012.31,62.2921,62.2921,0,0,0-2.3023,9.84c-.041.247.3017.7192.5017.56.5483-.4364.7292.2457,1.07-.02a.3156.3156,0,0,1,.4956.2249.7974.7974,0,0,0,.7274-.4926l.281.1416a.4629.4629,0,0,1,.6361-.3162c.28.0723.5025-.2779.3466-.5775.0951-.4628.2518-.6562.4481-.73.3876-.1447.8859.2935,1.2771-.1214.4969-.6122.3949-1.5335,1.05-2.0481a1.5474,1.5474,0,0,0,.8047-1.3722,2.8023,2.8023,0,0,1,.6444-1.7115c.6337-.0887.57-.81,1.1811-1.0883a.3164.3164,0,0,0,.54-.1851c.6437.0626.7922-.6781,1.1528-1.0765.4667-.7838-.548-1.3735-.8266-1.9536A6.5207,6.5207,0,0,0,68.6209,12.6223ZM44.0624,8.6267c-.3336,2.4145-.7971,4.8239-1.3384,7.1966-.1443,1.6423-4.5079.969-5.7894,1.051-.0249-.6212-.5354-1.31.109-1.6889.32-.3368.5118-.7711.9063-1.03,1.3051-2.3526,2.4165-5.0635,4.5578-6.8814.1809-.2946.6561-.3081.66-.7671.0756-.2575.48-.45.7389-.5879A5.1039,5.1039,0,0,1,44.0624,8.6267Z"/>
                <path d="M132.9357,22.92c.0623-.9871-.1659-6.22-1.8136-6.6561a3.032,3.032,0,0,0-.6831-1.2987,3.4933,3.4933,0,0,0-3.2237-.8092,2.3572,2.3572,0,0,0-1.0885.544,6.6105,6.6105,0,0,0-4.0709,2.1948c-5.5184-3.6349-8.3956-1.26-12.0015,3.2694-.0767-.0539-.2994-.1949-.3761-.2488a3.229,3.229,0,0,0,.6385-2.4572c-.1825-.6126.5309-1.0915-.14-1.8269-1.2449-.2146-1.5734-1.6486-3.443-1.472-1.5522.1466-2.3678,5.29-2.0807,6.6419-.9357.014-2.2922.4708-3.1331-.1568a1.908,1.908,0,0,1-.6748-1.2224l.2568-.1332c.4837-.73-.2246-1.8095-.19-2.6046a1.7946,1.7946,0,0,1,2.42-1.57.46.46,0,0,0,.5352-.11c.2268-.2557.3289-.6708.6725-.449.3093.2.515-.2407.515-.2407a.6718.6718,0,0,0,.5122-.4767c.2336-.7967-.5351-1.0487-1.114-1.0715-1.1977-.7486-3.6732-.9023-4.8592.4716a5.0763,5.0763,0,0,0-2.29,1.9721c-1.451,2.5934-.4092,6.8923,2.373,8.1834,1.6938.0382,2.1636.9269,3.2753.0022.3575-.13,1.1925-.0312,1.2059-.6271-.0828-.65.4431-.6453.9058-.8622,1.0159,2.0575,3.912,3.5845,5.9681,2.0638,2.8169-.3929,3.5243-3.6368,5.7216-5.305a.6811.6811,0,0,0,.8745-.4039l.013-.0387c-.1653,2.9536-1.9739,4.4372-1.6609,7.1471l.2682.1313a2.9132,2.9132,0,0,1,2.6618-1.0478l.1677-.3377c.994.6243,2.932,2.1075,3.2958.1391.9315.0331,1.8494-.4984,1.4546-1.2948a10.1,10.1,0,0,1,2.4359-5.0707c.4485-.3948.8568-.1478.9355.665.1474,1.522-.209,4.79.686,7.97a3.25,3.25,0,0,0,.33,2.304c.128.28.4316.1452.605.039l.1.22c1.59-.743,1.566-1.1756,2.6112-2.0416.4087.025.6453-.1228.6673-.5544.4809-.3882.2134-.9177.5669-1.3457C133.6627,24.3512,132.8926,23.6033,132.9357,22.92Z"/>
            </g>
        </svg>
    );

    return (
        <div className="primary-nav--inline--lg border-bottom">

            <div className="primary-nav__logo">

                <a className="flex-column align-items-center width-auto" href="#1" title="Home" data-logo="brand">
                    {logo}
                    <span className="font-size-sm">
                        Carl Avidano, Artist
                    </span>
                </a>

            </div>

            <nav className="primary-nav__menu" aria-label="Main Menu" id="main-menu">

                <ul>
                    <li>
                        <Link to="#1">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="#1">
                            About
                        </Link>
                    </li>
                </ul>

            </nav>

            <div className="primary-nav__actions">

                <button className="mobile-menu-toggle button button--icon-only"
                    aria-label="Menu"
                    data-toggle="collapse"
                    data-target-toggle="#main-menu">
                        <span className="icon icon-menu"></span>
                </button>

                <div className="button-group">

                    <button
                        className="button theme-canvas button--icon-only"
                        onClick={handleThemeModeClick}>
                            <span className="icon icon-mode-light-dark" aria-hidden="true"></span>
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Header;