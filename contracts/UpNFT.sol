// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MiNFT is ERC721, Ownable {
    constructor() ERC721("Up", "UP") {}

    // Mintear NFT para el user, se hace una única vez cuando se suscribe al Bundle
    function mint(address _to, uint256 _tokenId) external onlyOwner {
        _mint(_to, _tokenId);
    }

    // Quemar NFT existente
    function burn(uint256 _tokenId) external onlyOwner {
        _burn(_tokenId);
    }

    // Automatizar la quema de NFT basado en un disparador externo = usuario cancela suscripción, llega fecha y no paga
    function subNoPagaQuemaNFT(uint256 _tokenId) external onlyOwner {
        bool pagoRecibido = verificarEstadoPago(_tokenId);

        if (!pagoRecibido) {
            _burn(_tokenId);
        }
    }

    // Funcion donde implementar lógica para verificar pago
    // Imagino que una forma sería teniendo en la base de datos el estado de si pagó o no, chequear el día del pago si se hizo o no y en ese caso quemar el token
    function verificarEstadoPago(uint256 _tokenId) internal pure returns (bool) {
        // IMPLEMENTAR VERIFICACIÓN ESTADO DE PAGO
        return false; // Para fines de demostración, asumimos que no se recibió el pago
    }
}
