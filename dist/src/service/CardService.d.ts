declare class CardService {
    private cardRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (product: any) => Promise<any>;
    private update;
    private findById;
    private findByName;
    private findByBrand;
    private remove;
}
declare const _default: CardService;
export default _default;
