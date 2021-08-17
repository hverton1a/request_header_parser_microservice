function header_parser(req){
    return{ "ipaddress":req.header('host'),
            "language":req.header('user-agent'),
            "software":req.header('accept-language')
          };
}

module.exports = { header_parser };