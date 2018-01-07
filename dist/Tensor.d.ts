export declare class Tensor {
    __error__: Error;
    __ready__: boolean;
    __waits__: {
        res: () => void;
        rej: () => void;
    }[];
    id: string;
    data: Float64Array | Int32Array;
    data_is_pointer: boolean;
    type: string;
    constructor(data: string | any[], data_is_pointer?: boolean);
    __finish__(res: string): void;
    ready(): Promise<void>;
    autograd(state: boolean): Promise<void>;
    params_func(name: string, params: any[], return_response?: boolean, return_type?: string): Promise<any>;
    no_params_func(name: string, return_response?: boolean, return_type?: string): Promise<any>;
    get(param_name?: string, response_as_tensor?: boolean, return_type?: string): Promise<any>;
    protected cmd(functionCall: string, tensorIndexParams?: any[]): {
        'functionCall': string;
        'objectType': string;
        'objectIndex': string;
        'tensorIndexParams': any[];
    };
    is_contiguous(): Promise<boolean>;
    __repr__(verbose?: boolean): Promise<string>;
    abs(): Promise<any>;
    abs_(): Promise<any>;
    acos(): Promise<any>;
    acos_(): Promise<any>;
    addmm_(x: Tensor, y: Tensor): Promise<any>;
    addmm(x: Tensor, y: Tensor): Promise<any>;
    addmv_(x: Tensor, y: Tensor): Promise<any>;
    addmv(x: Tensor, y: Tensor): Promise<any>;
    asin(): Promise<any>;
    asin_(): Promise<any>;
    atan(): Promise<any>;
    atan_(): Promise<any>;
    __add__(x: Tensor): Promise<any>;
    __iadd__(x: Tensor): Promise<any>;
    backward(grad?: any): Promise<void>;
    ceil(): Promise<any>;
    ceil_(): Promise<any>;
    contiguous(): Promise<any>;
    copy(): Promise<any>;
    cos(): Promise<any>;
    cos_(): Promise<any>;
    cosh(): Promise<any>;
    cosh_(): Promise<any>;
    children(): Promise<never[]>;
    creation_op(): Promise<any>;
    creators(): Promise<never[]>;
    cumsum(dim?: number): Promise<any>;
    dataOnGpu(): Promise<boolean>;
    exp(): Promise<any>;
    exp_(): Promise<any>;
    expand(...args: number[]): Promise<any>;
    index_add(indices: , dim: number, x: Tensor): Promise<any>;
    index_add_(indices: , dim: number, x: Tensor): Promise<any>;
    index_select(dim: number, indices: ): Promise<any>;
    __truediv__(x: Tensor): Promise<any>;
    __itruediv__(x: Tensor): Promise<any>;
    keepgrad(): Promise<boolean>;
    __pow__(x: Tensor): Promise<any>;
    __ipow__(x: Tensor): Promise<any>;
    pow(x: Tensor): Promise<any>;
    pow_(x: Tensor): Promise<any>;
    floor(): Promise<any>;
    floor_(): Promise<any>;
    round(): Promise<any>;
    round_(): Promise<any>;
    mm(other: Tensor): Promise<any>;
    grad(): Promise<any>;
    __mod__(x: Tensor): Promise<any>;
    __imod__(x: Tensor): Promise<any>;
    __mul__(x: Tensor): Promise<any>;
    __imul__(x: Tensor): Promise<any>;
    __neg__(): Promise<any>;
    neg(): Promise<any>;
    neg_(): Promise<any>;
    relu(): Promise<any>;
    rsqrt(): Promise<any>;
    save(filename: string): Promise<any>;
    set(param_name?: string, params?: any[]): Promise<any>;
    sigmoid_(): Promise<any>;
    sigmoid(): Promise<any>;
    sign(): Promise<any>;
    sign_(): Promise<any>;
    sin(): Promise<any>;
    sin_(): Promise<any>;
    size(): Promise<any>;
    softmax(dim?: number): Promise<any>;
    std(dim?: number): Promise<any>;
    stride(dim?: number): Promise<any>;
    sqrt(): Promise<any>;
    sqrt_(): Promise<any>;
    trace(): Promise<any>;
    trunc(): Promise<any>;
    __sub__(x: Tensor): Promise<any>;
    __isub__(x: Tensor): Promise<any>;
    view(...args: any[]): Promise<any>;
    view_(...args: any[]): Promise<this>;
    view_as(x: Tensor): Promise<any>;
    view_as_(x: Tensor): Promise<this>;
    T(): Promise<any>;
    triu(k?: number): Promise<any>;
    triu_(k?: number): Promise<any>;
    unsqueeze(dim: number): Promise<any>;
    unsqueeze_(dim: number): Promise<any>;
    zero_(): Promise<any>;
}
export declare class IntTensor extends Tensor {
    constructor(data: string | any[], data_is_pointer?: boolean);
}
export declare class FloatTensor extends Tensor {
    constructor(data: string | any[], autograd?: boolean, data_is_pointer?: boolean);
    autograd(setter: boolean): Promise<boolean | this>;
}