//
//  RCTBarcodeScannerManager.h
//  ReactNativeBarcodeScanner
//
//  Created by Richard Lee on 4/18/15.
//  Copyright (c) 2015 Richard Lee(lifuzu@gmail.com). All rights reserved.
//

#import "RCTViewManager.h"
#import <AVFoundation/AVFoundation.h>

@class RCTBarcodeScanner;

@interface RCTBarcodeScannerManager : RCTViewManager <AVCaptureMetadataOutputObjectsDelegate>

@property (nonatomic) dispatch_queue_t sessionQueue;
@property (nonatomic) AVCaptureSession *session;
@property (nonatomic) AVCaptureDeviceInput *captureDeviceInput;
@property (nonatomic) id runtimeErrorHandlingObserver;
@property (nonatomic) NSInteger presetCamera;
@property (nonatomic) AVCaptureVideoPreviewLayer *previewLayer;
@property (nonatomic, copy) void (^callback)(NSArray *codes);

- (void)changeAspect:(NSString *)aspect;
- (void)changeCamera:(NSInteger)camera;
- (void)changeOrientation:(NSInteger)orientation;
- (AVCaptureDevice *)deviceWithMediaType:(NSString *)mediaType preferringPosition:(AVCaptureDevicePosition)position;
- (void)startScanning;
- (void)stopScanning;

@end
