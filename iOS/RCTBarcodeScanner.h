//
//  RCTBarcodeScanner.h
//  ReactNativeBarcodeScanner
//
//  Created by Richard Lee on 4/18/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RCTBarcodeScannerManager;

@interface RCTBarcodeScanner : UIView

@property (nonatomic) RCTBarcodeScannerManager *manager;

- (id) initWithManager:(RCTBarcodeScannerManager*) manager;

@end
