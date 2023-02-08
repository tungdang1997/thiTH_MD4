declare class CarService {
    private carRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (car: any) => Promise<any>;
    private update;
    private findById;
    private findByName;
    private findByBrand;
    findByAboutPrice: () => Promise<any>;
    findByAboutQuantity: () => Promise<any>;
    findByMaxCar: () => Promise<any>;
    private remove;
    sortPriceASC: () => Promise<any>;
    sortDownByQuantity: () => Promise<any>;
}
declare const _default: CarService;
export default _default;
