//
//  RCTBarcodeScanner.m
//  ReactNativeBarcodeScanner
//
//  Created by Richard Lee on 4/18/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTBarcodeScanner.h"
#import "RCTBarcodeScannerManager.h"


@implementation RCTBarcodeScanner

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (id) initWithManager:(RCTBarcodeScannerManager *)manager
{
  if((self = [super init])) {
    self.manager = manager;
  }
  return self;
}

- (void)setAspect:(NSString *)aspect
{
  [self.manager changeAspect:aspect];
}

- (void)setType:(NSInteger)camera
{
  if (self.manager.session.isRunning) {
    [self.manager changeCamera:camera];
  }
  else {
    self.manager.presetCamera = camera;
  }
}

- (void)setOrientation:(NSInteger)orientation
{
  [self.manager changeOrientation:orientation];
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  self.manager.previewLayer.frame = self.bounds;
  [self.layer insertSublayer:self.manager.previewLayer atIndex:0];
}

- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
  [self insertSubview:view atIndex:atIndex + 1];
  return;
}

- (void)removeReactSubview:(UIView *)subview
{
  [subview removeFromSuperview];
  return;
}

@end
