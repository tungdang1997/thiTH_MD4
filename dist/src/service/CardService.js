"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("../model/card");
const data_source_1 = require("../data-source");
class CardService {
    constructor() {
        this.getAll = async () => {
            let sql = `select card.id, card.name, card.price, card.quantity, brand.name as nameBrand, brand.describe from card join brand on card.id = brand.id`;
            let products = await this.cardRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.cardRepository.save(product);
        };
        this.update = async (id, newProduct) => {
            let product = await this.cardRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.cardRepository.update({ id: id }, newProduct);
        };
        this.findById = async (id) => {
            let product = await this.cardRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.findByName = async (name) => {
            let sql = `select c.id,c.name,c.price,c.quantity,b.name as nameBrand, b.describe from card c join brand b on p.category = c.id where c.name like '%${name}%'`;
            let card = await this.cardRepository.query(sql);
            if (!card) {
                return null;
            }
            return card;
        };
        this.findByBrand = async (name) => {
            let sql = `select c.id,c.name,c.price,c.quantity,b.name as nameBrand, b.describe from card c join brand b on p.category = c.id where b.name like '%${name}%'`;
            let brand = await this.cardRepository.query(sql);
            if (!brand) {
                return null;
            }
            return brand;
        };
        this.remove = async (id) => {
            let product = await this.cardRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.cardRepository.delete({ id: id });
        };
        this.cardRepository = data_source_1.AppDataSource.getRepository(card_1.Card);
    }
}
exports.default = new CardService();
//# sourceMappingURL=CardService.js.map