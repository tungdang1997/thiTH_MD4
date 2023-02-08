declare class CarService {
    private carRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (car: any) => Promise<any>;
    private update;
    private findById;
    private findByName;
    private findByBrand;
    private remove;
    sortPriceASC: () => Promise<any>;
}
declare const _default: CarService;
export default _default;
